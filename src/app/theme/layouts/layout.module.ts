import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedHrefPreventDefaultDirective } from '../../components/shared/directive/shared-href-prevent-default.directive';
import { SharedUnwrapTagDirective } from '../../components/shared/directive/shared-unwrap-tag.directive';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderNavComponent,
		DefaultComponent,
		AsideNavComponent,
		FooterComponent,
		QuickSidebarComponent,
		ScrollTopComponent,
		TooltipsComponent,
		SharedHrefPreventDefaultDirective,
		SharedUnwrapTagDirective,
	],
	exports: [
		LayoutComponent,
		HeaderNavComponent,
		DefaultComponent,
		AsideNavComponent,
		FooterComponent,
		QuickSidebarComponent,
		ScrollTopComponent,
		TooltipsComponent,
		SharedHrefPreventDefaultDirective,
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class LayoutModule {
}