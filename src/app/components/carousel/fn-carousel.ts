
import Swipe from './swipe';

const defaults = {
  $element: undefined,
  selectors: {
    elements: `.js-carousel-list-element`,
    list: `.js-carousel-list`,
  },
  classes: {
    active: `e2m-carousel--active`,
    arrow: `e2m-carousel__arrow`,
    arrowLeft: `e2m-carousel__arrow--left`,
    arrowRight: `e2m-carousel__arrow--right`,
    arrowDisabled: `e2m-carousel__arrow--disabled`,
    bullets: `e2m-carousel__bullets`,
    bullet: `e2m-carousel__bullets-bullet`,
    bulletActive: `e2m-carousel__bullets-bullet--active`,
    elementActive: `e2m-carousel__list-element--active`,
    list: `js-carousel-list`,
    loaded: `e2m-carousel--loaded`,
  },
};

/**
 * Carousel.
 *
 *  Carousel
 *  {Object} properties - specifies the configurations
 * for the module.
 */
export default class Carousel {
  private responsiveIndex: null;
  private carousel: undefined;
  private list: any;
  private elements: boolean | NodeListOf<Element>;
  private totalElements: any;
  private config: any;
  private bulletsArray: any[];
  private arrows: {};
  private onInitialized: Event;
  private onChanged: Event;
  private onUpdated: Event;
  private onAfterDestroy: Event;
  private onBeforeDestroy: Event;

  constructor(properties?: { $element: any; config: any }) {
    this.responsiveIndex = null;
    const carousel = properties.$element;
    const list = carousel.querySelector(defaults.selectors.list);
    const elements = carousel.querySelectorAll(defaults.selectors.elements);
    // const config = this.getConfig(properties);
    const config = properties.config;
    // @ts-ignore
    const listElements = properties.listItems
      // @ts-ignore
      ? properties.listItems
      : elements;

    const bulletsArray = [];

    this.carousel = carousel;
    this.list = list;
    this.elements = listElements;
    this.totalElements = listElements.length;
    this.config = config;
    this.bulletsArray = bulletsArray;
    this.arrows = {};

    // Events
    this.onInitialized = new Event('mva10:init');
    this.onChanged = new Event('mva10:changed');
    this.onUpdated = new Event('mva10:updated');
    this.onAfterDestroy = new Event('mva10:after:destroy');
    this.onBeforeDestroy = new Event('mva10:before:destroy');
  }

  getConfig(properties) {
    const unsafeProps =
      properties.config || properties.$element.dataset.config;
    let response;

    try {
      response = JSON.parse(unsafeProps);
    } catch (err) {
      response = JSON.parse(this.decodeHTML(unsafeProps));
    }
    return response;
  }

  decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  /**
   * Initialise the module.
   *
   * init
   *
   * @return undefined
   */

  init(firstTime = true) {
    this.setCarouselSwipe();
    // @ts-ignore
    this.getBreakpoint();

    // Evento resize para actualizar el carrusel
    window.addEventListener('resize', e => {
      // @ts-ignore
      this.getBreakpoint();
    });

    // EVENTO QUE DISPARAMOS CUANDO SE INICIALIZA EL CARRUSEL
    // @ts-ignore
    this.onInitialized.arrows = this.arrows;
    // @ts-ignore
    this.onInitialized.bulletsArray = this.bulletsArray;
    // @ts-ignore
    this.onInitialized.carousel = this.carousel;
    // @ts-ignore
    this.onInitialized.elements = this.elements;
    // @ts-ignore
    this.onInitialized.list = this.list;
    // @ts-ignore
    this.onInitialized.totalElements = this.totalElements;
    // @ts-ignore
    this.carousel.dispatchEvent(this.onInitialized);
  }

  /**
   * Get actual breakpoint
   *
   * getBreakpoint
   *
   * @return undefined
   */

  getBreakpoint(elements) {
    const mod = this;

    let index: any = 0;
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    Object.keys(mod.config.responsive).forEach(function(key, val) {
      if (windowWidth > mod.config.responsive[key].breakpoint) {
        index = key;
      }
    });

    this.responsiveIndex = index;
    mod.getElements(index);
  }

  /**
   * Get carousel elements or destroy
   *
   *  getElements
   *
   * @return undefined
   */

  getElements(index) {
    const mod = this;

    const elements = mod.config.responsive[index].elements;
    // @ts-ignore
    mod.visibleElements = elements;

    if (elements !== 0) {
      mod.setCarousel(elements);
    } else {
      mod.destroy();
    }
  }

  /**
   * Set carousel
   *
   * @function setCarousel
   *
   * @return undefined
   */

  setCarousel(visibleElements) {
    const mod = this;

    // @ts-ignore
    mod.carousel.classList.add(defaults.classes.active);

    let listWidth = 0;

    if (mod.totalElements <= visibleElements) {
      listWidth = 100;
    } else {
      listWidth = (mod.totalElements / visibleElements) * 100;
    }

    const elementWidth = 100 / mod.totalElements;

    mod.list.style.width = listWidth + '%';

    [].forEach.call(mod.elements, function(val, key) {
      val.style.width = elementWidth + '%';
    });

    // CONTROLS
    if (mod.config.build.bullets === true) {
      mod.setCarouselBullets();
    }

    // @ts-ignore
    if (mod.config.build.arrows === true || this.config.responsive[this.responsiveIndex].arrows === true) {
      mod.setCarouselArrows();
    } else {
      this.removeCarouselArrows();
    }
    // @ts-ignore
    mod.carousel.classList.add(defaults.classes.loaded);

    // EVENTO QUE DISPARAMOS CUANDO SE ACTUALIZA EL CARRUSEL
    // @ts-ignore
    mod.onUpdated.arrows = mod.arrows;
    // @ts-ignore
    mod.onUpdated.bulletsArray = mod.bulletsArray;
    // @ts-ignore
    mod.onUpdated.carousel = mod.carousel;
    // @ts-ignore
    mod.onUpdated.elements = mod.elements;
    // @ts-ignore
    mod.onUpdated.list = mod.list;
    // @ts-ignore
    mod.onUpdated.totalElements = mod.totalElements;
    // @ts-ignore
    mod.carousel.dispatchEvent(mod.onUpdated);
  }

  /**
   * Set carousel swipe interaction
   *
   *  setCarouselSwipe
   *
   *  undefined
   */

  setCarouselSwipe() {
    const mod = this;
    // Use class to get element by string.
    const swiper = new Swipe(mod.list);
    swiper.onLeft(function() {
      mod.moveCarousel('right');
    });
    swiper.onRight(function() {
      mod.moveCarousel('left');
    });
    swiper.onUp(function() {});
    swiper.onDown(function() {});
    swiper.run();
  }

  /**
   * Set carousel bullets
   *
   *  setCarouselBullets
   *
   * @return undefined
   */

  setCarouselBullets() {
    const mod = this;
    mod.bulletsArray = [];
    // @ts-ignore
    const oldBullets = mod.carousel.querySelectorAll(
      '.' + defaults.classes.bullets
    );
    [].forEach.call(oldBullets, function(val, key) {
      // @ts-ignore
      mod.carousel.removeChild(val);
    });
    const bullets = document.createElement('div');
    bullets.classList.add(defaults.classes.bullets);
    // @ts-ignore
    const numberBullets = mod.totalElements - mod.visibleElements + 1;
    if (numberBullets <= 1) {
      return false;
    }

    for (let i = 0; i < numberBullets; i++) {
      let bullet;
      if (mod.config.build.clickable_bullets === true) {
        bullet = document.createElement('button');
        bullet.setAttribute('type', 'button');
        bullet.setAttribute(
          'title',
          'Ir al elemento ' + (i + 1) + ' del carrusel'
        );
        bullet.innerHTML =
          'Ir al elemento ' + (i + 1) + ' del carrusel';
        bullet.addEventListener('click', function() {
          // @ts-ignore
          mod.moveCarouselTo(i);
        });
      } else {
        bullet = document.createElement('div');
        bullet.innerHTML = i + 1;
      }

      bullet.classList.add(defaults.classes.bullet);
      bullets.appendChild(bullet);
      mod.bulletsArray.push(bullet);
    }
    // @ts-ignore
    mod.carousel.appendChild(bullets);
    // @ts-ignore
    const responsiveArrow = this.config.responsive[this.responsiveIndex]
      .arrows;

    if (mod.config.build.arrows !== true && responsiveArrow !== true) {
      // @ts-ignore
      mod.position = 0;
      // @ts-ignore
      mod.moveCarouselTo(0);
    }
  }

  removeCarouselArrows() {
    const mod = this;
    // @ts-ignore
    const arrows = mod.carousel.querySelectorAll(
      '.' + defaults.classes.arrow
    );
    [].forEach.call(arrows, function(val, key) {
      // @ts-ignore
      mod.carousel.removeChild(val);
    });
  }

  /**
   * Set carousel arrows buttons
   *
   * @function setCarouselArrows
   *
   * @return undefined
   */

  setCarouselArrows() {
    const mod = this;
    // @ts-ignore
    const arrows = mod.carousel.querySelectorAll(
      '.' + defaults.classes.arrow
    );
    [].forEach.call(arrows, function(val, key) {
      // @ts-ignore
      mod.carousel.removeChild(val);
    });
    // @ts-ignore
    if (mod.totalElements <= mod.visibleElements) {
      return false;
    }

    const arrowLeft = document.createElement('button');
    const arrowRight = document.createElement('button');

    arrowLeft.setAttribute('type', 'button');
    arrowRight.setAttribute('type', 'button');

    arrowLeft.innerHTML = 'Mover carrusel a la izquierda';
    arrowRight.innerHTML = 'Mover carrusel a la derecha';

    arrowLeft.setAttribute('title', 'Mover carrusel a la izquierda');
    arrowRight.setAttribute('title', 'Mover carrusel a la derecha');

    arrowLeft.classList.add(defaults.classes.arrow);
    arrowLeft.classList.add(defaults.classes.arrowLeft);
    arrowRight.classList.add(defaults.classes.arrow);
    arrowRight.classList.add(defaults.classes.arrowRight);

    if (mod.bulletsArray.length > 0) {
      // @ts-ignore
      mod.carousel.insertBefore(
        arrowLeft,
        // @ts-ignore
        mod.carousel.querySelector('.' + defaults.classes.bullets)
      );
      // @ts-ignore
      mod.carousel.insertBefore(
        arrowRight,
        // @ts-ignore
        mod.carousel.querySelector('.' + defaults.classes.bullets)
      );
    } else {
      // @ts-ignore
      mod.carousel.appendChild(arrowLeft);
      // @ts-ignore
      mod.carousel.appendChild(arrowRight);
    }

    arrowLeft.addEventListener('click', function() {
      mod.moveCarousel('left');
    });
    arrowRight.addEventListener('click', function() {
      mod.moveCarousel('right');
    });
    mod.arrows = { left: arrowLeft, right: arrowRight };
    // @ts-ignore
    mod.position = 0;
    // @ts-ignore
    mod.moveCarouselTo(0);
  }

  /**
   * Move carousel
   *
   * @function moveCarousel
   *
   * @return undefined
   */

  moveCarousel(direction) {
    const mod = this;
    if (direction === 'left') {
      // @ts-ignore
      if (mod.position > 0) {
        // @ts-ignore
        mod.position--;
      }
    } else {
      // @ts-ignore
      if (mod.position < mod.totalElements - mod.visibleElements) {
        // @ts-ignore
        mod.position++;
      }
    }
    // @ts-ignore
    mod.moveCarouselTo(mod.position, direction);
  }

  /**
   * Move carousel to X position
   *
   * @function moveCarouselTo
   *
   * @return undefined
   */

  moveCarouselTo(position, direction) {
    const mod = this;
    // @ts-ignore
    mod.position = position;

    mod.list.style.transform =
      'translate3d(' +
      // @ts-ignore
      -((100 / mod.elements.length) * position) +
      '%, 0, 0)';
// @ts-ignore
    mod.onChanged.carousel = mod.carousel;
    // @ts-ignore
    mod.onChanged.position = position;
    // @ts-ignore
    mod.onChanged.direction = direction;
    // @ts-ignore
    mod.onChanged.visibleElements = mod.getActiveElements();
    // console.log(mod.onChanged);
    // @ts-ignore
    mod.carousel.dispatchEvent(mod.onChanged);
// @ts-ignore
    mod.updateCarousel();
  }

  /**
   * Update arrows and bullets
   *
   * @function updateCarousel
   *
   * @return undefined
   */

  updateCarousel(position) {
    const mod = this;

    if (mod.bulletsArray.length > 0) {
      [].forEach.call(mod.bulletsArray, function(val, key) {
        val.classList.remove(defaults.classes.bulletActive);
      });
// @ts-ignore
      mod.bulletsArray[mod.position].classList.add(
        defaults.classes.bulletActive,
      );
    }

    if (
      mod.config.build.arrows === true ||
      // @ts-ignore
      this.config.responsive[this.responsiveIndex].arrows === true
    ) {
      // @ts-ignore
      mod.carousel
        .querySelector('.' + defaults.classes.arrowLeft)
        .classList.remove(defaults.classes.arrowDisabled);
      // @ts-ignore
      mod.carousel
        .querySelector('.' + defaults.classes.arrowRight)
        .classList.remove(defaults.classes.arrowDisabled);
      // @ts-ignore
      mod.carousel
        .querySelector('.' + defaults.classes.arrowLeft)
        .removeAttribute('disabled');
      // @ts-ignore
      mod.carousel
        .querySelector('.' + defaults.classes.arrowRight)
        .removeAttribute('disabled');
// @ts-ignore
      if (mod.position <= 0) {
        // @ts-ignore
        mod.carousel
          .querySelector('.' + defaults.classes.arrowLeft)
          .classList.add(defaults.classes.arrowDisabled);
        // @ts-ignore
        mod.carousel
          .querySelector('.' + defaults.classes.arrowLeft)
          .setAttribute('disabled', true);
      } else if (
        // @ts-ignore
        mod.position >=
        // @ts-ignore
        mod.totalElements - mod.visibleElements
      ) {
        // @ts-ignore
        mod.carousel
          .querySelector('.' + defaults.classes.arrowRight)
          .classList.add(defaults.classes.arrowDisabled);
        // @ts-ignore
        mod.carousel
          .querySelector('.' + defaults.classes.arrowRight)
          .setAttribute('disabled', true);
      }
    }

    mod.setActiveElements();
  }

  /**
   * Get active carousel elements
   *
   * @function getActiveElements
   *
   * @return {Array} - Array with active elements
   */

  getActiveElements() {
    const mod = this;
    const activeElements = [];
    [].forEach.call(mod.elements, element => {
      element.classList.contains(defaults.classes.elementActive)
        ? activeElements.push(element)
        : null;
    });
    return activeElements;
  }

  /**
   * Apply class to active carousel elements
   *
   * @function setActiveElements
   *
   * @return undefined
   */

  setActiveElements() {
    const mod = this;
    for (let i = 0; i < mod.totalElements; i++) {
      // @ts-ignore
      if (i >= mod.position && i < mod.position + mod.visibleElements) {
        mod.elements[i].classList.add(defaults.classes.elementActive);
      } else {
        mod.elements[i].classList.remove(
          defaults.classes.elementActive
        );
      }
    }
  }

  /**
   * Destroy carousel functionality and styles
   *
   * @function destroy
   *
   * @return undefined
   */

  destroy() {
    const mod = this;

    // DISPATCH EVENT BEFORE CAROUSEL HAS BEEN DESTROYED
    // @ts-ignore
    mod.onAfterDestroy.carousel = mod.carousel;
    // @ts-ignore
    mod.onAfterDestroy.position = mod.position;
    // @ts-ignore
    mod.onAfterDestroy.visibleElements = mod.getActiveElements();
// @ts-ignore
    mod.carousel.dispatchEvent(mod.onAfterDestroy);
// @ts-ignore
    mod.carousel.classList.remove(defaults.classes.active);
// @ts-ignore
    const arrowLeft = mod.carousel.querySelector(
      '.' + defaults.classes.arrowLeft
    );
    // @ts-ignore
    const arrowRight = mod.carousel.querySelector(
      '.' + defaults.classes.arrowRight
    );
    // @ts-ignore
    const bullets = mod.carousel.querySelector(
      '.' + defaults.classes.bullets
    );

    if (arrowLeft !== undefined && arrowLeft !== null) {
      // @ts-ignore
      mod.carousel.removeChild(arrowLeft);
    }

    if (arrowRight !== undefined && arrowRight !== null) {
      // @ts-ignore
      mod.carousel.removeChild(arrowRight);
    }

    if (bullets !== undefined && bullets !== null) {
      // @ts-ignore
      mod.carousel.removeChild(bullets);
    }

    mod.list.style.width = '';

    [].forEach.call(mod.elements, function(val, key) {
      val.style.width = '';
      val.classList.remove(defaults.classes.elementActive);
    });
// @ts-ignore
    mod.carousel.classList.add(defaults.classes.loaded);

    // DISPATCH EVENT AFTER CAROUSEL HAS BEEN DESTROYED
    // @ts-ignore
    mod.carousel.dispatchEvent(this.onAfterDestroy);
  }

}
