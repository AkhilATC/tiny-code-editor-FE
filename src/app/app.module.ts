import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MatFormFieldModule,
    SocketIoModule.forRoot(config),
    CodeEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
