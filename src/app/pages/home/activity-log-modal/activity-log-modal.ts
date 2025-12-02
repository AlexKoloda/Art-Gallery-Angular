import { Component, EventEmitter, Output } from '@angular/core';
import { ILog } from '../../../models/log.model';
import { LogInfo } from '../../../shared/log-info/log-info';
import { ButtonComponent } from '../../../shared/button/button';
//TODO: test logs array, replace with API data in feat.
const TEST_LOGS_ARRAY: ILog[] = [
  {
    id: 1,
    date: new Date('2023-03-27T12:21:00'),
    type: 'Category',
    value: 'Painting',
  },
  {
    id: 2,
    date: new Date(),
    type: 'Art',
    value: 'Persistence of memory',
  },
];

@Component({
  selector: 'app-activity-log-modal',
  imports: [LogInfo, ButtonComponent],
  templateUrl: './activity-log-modal.html',
  styleUrl: './activity-log-modal.scss',
})
export class ActivityLogModal {
  logs: ILog[] = TEST_LOGS_ARRAY;
  @Output() cancel = new EventEmitter<void>();

  onClickClose() {
    this.cancel.emit();
  }
}
