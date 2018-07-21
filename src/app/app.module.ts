import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PostsService } from './services/posts.service';
import { TestserviceService } from './testservice.service';
import { AppComponent } from './app.component';
import { SqrtPipe } from './app.sqrt';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [
      AppComponent,
      SqrtPipe,
      NewCmpComponent,
      EventHandlingComponent,
      InputFormatDirective,
      ContactFormComponent,
      PostsComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [
      PostsService,
      TestserviceService,
      { provide : ErrorHandler, useClass : AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
