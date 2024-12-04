import { ChildrenOutletContexts, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'api-creds',
        loadComponent: () => {
            return import('./api-creds/api-creds.component').then((m) => m.ApiCredsComponent)
        },
    },
    {
        path: 'waf-audit',
        loadComponent: () => {
            return import('./waf-audit/waf-audit.component').then((m) => m.WafAuditComponent)
        },
    },
    {
        path: 'waf-audit/namespace',
        loadComponent: () => {
            return import('./waf-audit/namespace/namespace.component').then((m) => m.NamespaceComponent)
        },
    },
    {
        path: 'waf-audit/policies',
        loadComponent: () => {
            return import('./waf-audit/policies/policies.component').then((m) => m.PoliciesComponent)
        },
    },
    {
        path: 'waf-audit/policies',
        outlet: 'side-menu',
        loadComponent: () => {
            return import('./waf-audit/policies/policies.component').then((m) => m.PoliciesComponent)
        },
    },
    {
        path: 'lb-audit',
        loadComponent: () => {
            return import('./lb-audit/lb-audit.component').then((m) => m.LbAuditComponent)
        },
    },
    {
        path: 'lb-audit/namespace',
        loadComponent: () => {
            return import('./lb-audit/namespace/namespace.component').then((m) => m.NamespaceComponent)
        },
    }

];
