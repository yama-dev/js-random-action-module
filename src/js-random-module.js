/*eslint no-console: "off"*/

export default class JS_RANDOM_ACTION_MODULE {

  constructor(elemItems,options={}){

    // Set Configs.
    this.CONFIG = {
      elemWrap: options.elemWrap         || 'body',
      elemItems: elemItems               || '.bg__item',
      durationX2: options.durationX2     || 2000,
      interval: options.interval         || 1000,
      addClassName: options.addClassName || 'active',
      autoStart: options.autoStart == false ? false : true,
      positionRandom: options.positionRandom == false ? false : true,
      repeat: options.repeat == false ? false : true
    };

    this.ActionCount = 0;

    // Set Elements.
    this.elemWrap  = document.querySelector(this.CONFIG.elemWrap);
    this.elemItems = Array.prototype.slice.call(document.querySelectorAll(this.CONFIG.elemWrap + ' ' + this.CONFIG.elemItems));

    // Set Elements Length.
    this.elemItemsLenght = this.elemItems.length - 1;

    // Generate empty array for judgment.
    this.checkElemList = [];
    for (var i = 0; i <= this.elemItemsLenght; i++) {
      this.checkElemList[i] = true;
    }

    // Set Initialize Event-Listener.
    window.addEventListener('load', () => {
      this.Initialize();
    });

  }

  Random(){
    return Math.random();
  }

  Round(num) {
    return Math.round(num * 100) / 100;
  }

  RandomSelect(min=0,max=10) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  Initialize() {
    // Set initial position of element.
    Array.prototype.forEach.call(this.elemItems, (elem) =>  {
      var randomTop  = this.Round(this.elemWrap.clientHeight * this.Random());
      var randomLeft = this.Round(this.elemWrap.clientWidth * this.Random());

      if(this.CONFIG.positionRandom){
        elem.style.top  = randomTop + 'px';
        elem.style.left = randomLeft + 'px';
      }
    });

    if(this.CONFIG.autoStart) this.StartAction();
  }

  StartAction(){
    this.Interval = setInterval( () => {
      this.Decision();
    }, this.CONFIG.interval);
  }

  StopAction(){
    clearInterval(this.Interval);
  }

  Decision() {
    if(!this.CONFIG.repeat && this.elemItemsLenght < this.ActionCount){
      this.StopAction();
      return false;
    }
    var targetIndex = this.RandomSelect(0, this.elemItemsLenght);
    if (this.checkElemList[targetIndex]) {
      this.ActionCount++;
      this.checkElemList[targetIndex] = false;
      this.Action(targetIndex);
    } else {
      // 既にactiveの場合は再帰的に呼び出し
      this.Decision();
    }
  }

  Action(targetIndex) {
    // Start Motion.
    this.Motion(targetIndex);

    // Remove class-name.
    if(this.CONFIG.repeat){
      setTimeout( () => {
        this.elemItems[targetIndex].classList.remove(this.CONFIG.addClassName);
      }, this.CONFIG.durationX2 * 0.5);
    }

    // Change check flg.
    if(this.CONFIG.repeat){
      setTimeout( () => {
        this.checkElemList[targetIndex] = true;
      }, this.CONFIG.durationX2);
    }
  }

  Motion(targetIndex) {
    var randomTop  = this.Round(this.elemWrap.clientHeight * this.Random());
    var randomLeft = this.Round(this.elemWrap.clientWidth * this.Random());

    var targetElemWidthPar2  = this.elemItems[targetIndex].clientWidth * 0.5;
    var targetElemHeightPar2 = this.elemItems[targetIndex].clientHeight * 0.5;

    if(this.CONFIG.positionRandom){
      this.elemItems[targetIndex].style.top  = (randomTop - targetElemHeightPar2) + 'px';
      this.elemItems[targetIndex].style.left = (randomLeft - targetElemWidthPar2) + 'px';
    }
    this.elemItems[targetIndex].classList.add(this.CONFIG.addClassName);
  }

  Update(){
    this.StopAction();

    // Reset ActionCount.
    this.ActionCount = 0;

    // Reset Elements.
    this.elemWrap  = document.querySelector(this.CONFIG.elemWrap);
    this.elemItems = Array.prototype.slice.call(document.querySelectorAll(this.CONFIG.elemWrap + ' ' + this.CONFIG.elemItems));

    // Reset Elements Length.
    this.elemItemsLenght = this.elemItems.length - 1;

    // Generate empty array for judgment.
    this.checkElemList = [];
    for (var i = 0; i <= this.elemItemsLenght; i++) {
      this.checkElemList[i] = true;
    }

    this.StartAction();
  }

}