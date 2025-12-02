import { Component, Input } from '@angular/core';
import { ILog } from '../../models/log.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-log-info',
  imports: [DatePipe],
  templateUrl: './log-info.html',
  styleUrls: ['./log-info.scss'],
})
export class LogInfo {
  @Input() log: ILog | undefined;
}
