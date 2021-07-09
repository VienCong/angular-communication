import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-child',
  template: `
      <div>Say {{ childMessage }}</div>
      Say {{ message2 }}
      <div>
        setValueParent:{{willChangeValue}}
      </div>
      <div>
        obj{{_obj|json}}
      </div>
  `,
  styleUrls: []
})
export class ChildComponent implements OnInit {
  _message: string | undefined;
  _obj: object | undefined;
  @Input() public childMessage: string | undefined;
  @Input('message1') public message2: string | undefined;
  // @Input() willChangeValue: string | undefined;
  @Input() set willChangeValue(value: string) {
    this._message = value;
    this.setup();
  }

  @Input() set setObj(value: object) {
    this._obj = value;
    this.setupObj();
  }
  constructor() {
  }

  ngOnInit() {
    // 进行复制操作
    console.log(this.willChangeValue);

  }

  setup() {
    console.log('setup', this._message);
    

  }

  setupObj() {
    console.log('_obj_setup',this._obj)

  }

}