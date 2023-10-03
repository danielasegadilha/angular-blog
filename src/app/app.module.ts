import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BigTitleComponent } from './components/big-title/big-title.component';
import { SmallTextComponent } from './components/small-text/small-text.component';
import { SessionTitleComponent } from './components/session-title/session-title.component';
import { YellowButtonComponent } from './components/yellow-button/yellow-button.component';
import { LinkButtonComponent } from './components/link-button/link-button.component';
import { DottedCircleComponent } from './components/dotted-circle/dotted-circle.component';
import { DottedCircleAndTextComponent } from './components/dotted-circle-and-text/dotted-circle-and-text.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { SignComponent } from './components/sign/sign.component';
import { BigSessionTitleComponent } from './components/big-session-title/big-session-title.component';
import { ImageScrollComponent } from './components/image-scroll/image-scroll.component';
import { ImageComponent } from './components/image/image.component';
import { LinkButtonWithLabelComponent } from './components/link-button-with-label/link-button-with-label.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    SearchBarComponent,
    BigTitleComponent,
    SmallTextComponent,
    SessionTitleComponent,
    YellowButtonComponent,
    LinkButtonComponent,
    DottedCircleComponent,
    DottedCircleAndTextComponent,
    CategoriesCardComponent,
    SignComponent,
    BigSessionTitleComponent,
    ImageScrollComponent,
    ImageComponent,
    LinkButtonWithLabelComponent,
    HomeComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
