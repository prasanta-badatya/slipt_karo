import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'WhoPaid — Free Bill Split Calculator for Trips & Rent', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'groups', title: 'Your Groups — WhoPaid', loadComponent: () => import('./pages/groups/groups.component').then(m => m.GroupsComponent) },
  { path: 'new', title: 'New Group — WhoPaid', loadComponent: () => import('./pages/new-roster/new-roster.component').then(m => m.NewRosterComponent) },
  { path: 'group/:id', title: 'Group — WhoPaid', loadComponent: () => import('./pages/roster-detail/roster-detail.component').then(m => m.RosterDetailComponent) },
  { path: 'split/new', title: 'New Split — WhoPaid', loadComponent: () => import('./pages/new-group/new-group.component').then(m => m.NewGroupComponent) },
  { path: 'split/:id', title: 'Split — WhoPaid', loadComponent: () => import('./pages/group-detail/group-detail.component').then(m => m.GroupDetailComponent) },
  { path: 'trips', title: 'Trip Expenses — WhoPaid', loadComponent: () => import('./pages/trips/trips.component').then(m => m.TripsComponent) },
  { path: 'trips/new', title: 'New Trip — WhoPaid', loadComponent: () => import('./pages/new-trip/new-trip.component').then(m => m.NewTripComponent) },
  { path: 'trip/:id', title: 'Trip — WhoPaid', loadComponent: () => import('./pages/trip-detail/trip-detail.component').then(m => m.TripDetailComponent) },
  { path: 'settings', title: 'Settings — WhoPaid', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'pay', title: 'Pay via UPI — WhoPaid', loadComponent: () => import('./pages/pay/pay.component').then(m => m.PayComponent) },
  { path: '**', redirectTo: '' },
];
