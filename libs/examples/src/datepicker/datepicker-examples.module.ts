/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtInputModule } from '@dynatrace/barista-components/input';
import { DtCheckboxModule } from '@dynatrace/barista-components/checkbox';
import { DtThemingModule } from '@dynatrace/barista-components/theming';
import { DtDatepickerModule } from '@dynatrace/barista-components/experimental/datepicker';
import { DtExampleDatepickerDark } from '.';
import { DtNativeDateModule } from '@dynatrace/barista-components/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    DtButtonModule,
    DtIconModule,
    DtDatepickerModule,
    DtInputModule,
    DtThemingModule,
    DtCheckboxModule,
    DtNativeDateModule,
  ],
  declarations: [DtExampleDatepickerDark],
})
export class DtExamplesDatepickerModule {}
