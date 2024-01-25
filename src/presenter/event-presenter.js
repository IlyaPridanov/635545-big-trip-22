import {render, replace, remove} from '../framework/render.js';
import TripEventsItemView from '../view/trip-events-item.js';
import EditPointView from '../view/edit-point.js';
import {Mode} from '../const.js';

export default class TripEventPresenter {
  #container = null;
  #destinationModel = null;
  #offersModel = null;
  #editPoint = null;
  #destination = null;
  #offer = null;
  #offers = null;
  #point = null;
  #pointComponent = null;
  #editComponent = null;
  #handleDataChange = null;
  #mode = Mode.DEFAULT;
  #handleModeChange = null;

  constructor({
    container,
    destinationModel,
    offersModel,
    onPointChange,
    onModeChange
  }) {
    this.#container = container;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onPointChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    this.#editPoint = this.#point;
    this.#destination = this.#destinationModel.getById(this.#editPoint.destination);
    this.#offer = this.#offersModel.getByType(this.#editPoint.type);
    this.#offers = this.#offer.offers;

    const preventPointComponent = this.#pointComponent;
    const preventEditComponent = this.#editComponent;

    this.#pointComponent = new TripEventsItemView({
      point: this.#point,
      destination: this.#destination,
      arrOffers: this.#offersModel.get(),
      onClickRollupBtn: this.#rollupBtnClick,
      onClickFavoriteBtn: this.#favoriteBtnClick,
    });

    this.#editComponent = new EditPointView({
      editPoint: this.#editPoint,
      arrDestinations: this.#destinationModel.get(),
      arrOffers: this.#offersModel.get(),
      onSubmit: this.#closeAndSaveEditOpenPoint,
      onClose: this.#closeEditOpenPoint
    });

    if (!preventPointComponent || !preventEditComponent) {
      render(this.#pointComponent, this.#container);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, preventPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editComponent, preventEditComponent);
    }
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editComponent);
  }

  #escKeyEventEdit = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      // this.#editComponent.reset(this.#editPoint);
      this.#closeEditOpenPoint();
      document.removeEventListener('keydown', this.#escKeyEventEdit);
    }
  };

  #rollupBtnClick = () => {
    this.#replacePointToEditor();
    document.addEventListener('keydown', this.#escKeyEventEdit);
  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditorToPoint();
    }
  };

  #replaceEditorToPoint = () => {
    replace(this.#pointComponent, this.#editComponent);
    this.#mode = Mode.DEFAULT;
  };

  #replacePointToEditor = () => {
    replace(this.#editComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  };

  // Close

  #closeEditOpenPoint = () => {
    // this.#editComponent.reset(this.#editPoint);
    this.#replaceEditorToPoint();
    document.removeEventListener('keydown', this.#escKeyEventEdit);
  };

  // Submit

  #closeAndSaveEditOpenPoint = (point) => {
    this.#replaceEditorToPoint();
    this.#handleDataChange(point);
    document.removeEventListener('keydown', this.#escKeyEventEdit);
  };

  #favoriteBtnClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
