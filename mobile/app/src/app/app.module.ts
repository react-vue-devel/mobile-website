import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { FeedPage } from '../pages/feed/feed';
import { HomePage } from '../pages/home/home';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { OrdersPage } from '../pages/orders/orders';
import { PopoverPage } from '../pages/orders/filterPopover/filterPopover';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { TenantCreatePage } from '../pages/tenant-create/tenant-create';
import { TenantDetailPage } from '../pages/tenant-detail/tenant-detail';


import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';

import { Camera } from '@ionic-native/camera';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ParseProvider } from '../providers/parse/parse';
import { StorageProvider } from '../providers/storage/storage';
import { TenantsProvider } from '../providers/tenants/tenants';
import { MenuProvider } from '../providers/menu/menu';
import { OrdersProvider } from '../providers/orders/orders';
import { ClientsProvider } from '../providers/clients/clients';
import { MapsProvider } from '../providers/maps/maps';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    _1: true,
    _2: 'Ionitron J. Framework',
    _3: '3',
    _4: 'Hello',
    _DISABLE_TUTORIAL: false
  });
}

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    ContentPage,
    FeedPage,
    HomePage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    OrdersPage,
    PopoverPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TabsPage,
    TenantCreatePage,
    TenantDetailPage,
    TutorialPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicPageModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    ContentPage,
    FeedPage,
    HomePage,
    ItemCreatePage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    MapPage,
    MenuPage,
    OrdersPage,
    PopoverPage,
    SearchPage,
    SettingsPage,
    SignupPage,
    TabsPage,
    TenantCreatePage,
    TenantDetailPage,
    TutorialPage,
    WelcomePage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ParseProvider,
    StorageProvider,
    TenantsProvider,
    MenuProvider,
    OrdersProvider,
    ClientsProvider,
    MapsProvider,
  ]
})
export class AppModule { }
