import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { FileNotFoundComponent } from './pages/file-not-found/file-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    TweetComponent,
    HomeComponent,
    FileNotFoundComponent,
    FooterComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
