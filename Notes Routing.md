# Angular Project Setup with Routing and Bootstrap Styling `Day 4`

## Step 1: Create Project

```bash
ng new web-router
cd web-router
ng serve --open
```

## Step 2: Create Components

```bash
ng generate component about
ng generate component services
ng serve --open

```

## Step 3: Create `app.router.ts`

`app.router.ts`

```typescript
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" }, // Default page
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
```

## Step 4: Update `app.module.ts`

`app.module.ts`

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.router";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";

@NgModule({
  declarations: [AppComponent, AboutComponent, ServicesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Step 5: Update `app.component.html`

`app.component.html`

```typescript
<div>
    <ul class="nav navbar-nav">
        <li>
            <a routerLink="about">About</a>
        </li>
        <li>
            <a routerLink="services">Services</a>
        </li>
        <li class="nav-item dropdown" id="myDropdown">
            <a class="nav-link dropdown-toggle" routerLink="course" data-bs-toggle="dropdown">All Courses </a>
            <ul class="dropdown-menu">
                <li> <a class="dropdown-item" routerLink="mean">MEAN Stack </a></li>
                <li> <a class="dropdown-item" routerLink="mern">MERN Stack &raquo; </a>
                    <ul class="submenu dropdown-menu">
                        <li><a class="dropdown-item" routerLink="mongo">Mongo</a></li>
                        <li><a class="dropdown-item" routerLink="express">Express</a></li>
                        <li><a class="dropdown-item" routerLink="node">Node </a></li>
                    </ul>
                </li>
                <li><a class="dropdown-item" routerLink="genai">Gen Ai </a></li>
            </ul>
        </li>
    </ul>
</div>

<style>
    /* ============ Desktop View ============ */
    @media all and (min-width: 992px) {
        .dropdown-menu li {
            position: relative;
        }
        .nav-item .submenu {
            display: none;
            position: absolute;
            left: 100%;
            top: -7px;
        }
        .dropdown-menu > li:hover {
            background-color: #f1f1f1;
        }
        .dropdown-menu > li:hover > .submenu {
            display: block;
        }
    }
    /* ============ Desktop View .end// ============ */

    /* ============ Small Devices ============ */
    @media (max-width: 991px) {
        .dropdown-menu .dropdown-menu {
            margin-left: 0.7rem;
            margin-right: 0.7rem;
            margin-bottom: 0.5rem;
        }
    }
    /* ============ Small Devices .end// ============ */
</style>

```

---

### `Summary` Notes:

- **Step 1**: Created a new Angular project named `web-router` and opened it with `ng serve --open`.
- **Step 2**: Generated two components: `about` and `services` using Angular CLI.
- **Step 3**: Created `app.router.ts` to define routing configuration (`routes`) and imported it into `app.module.ts`.
- **Step 4**: Updated `app.module.ts` to include `AppRoutingModule`.
- **Step 5**: Updated `app.component.html` to include navigation links (`routerLink`) and dropdown menu for courses, styled using CSS media queries for responsiveness.
