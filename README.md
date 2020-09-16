# Description
Base Modular GSCC Portal using github Submodules

This base portal implement:

- Authentication, Authorization 
- User Management
- Alarm management
- User Profile Management
- Module Management

## Add modules in the base portal

Go to the parent repository folder and pull modules
```bash
git submodule add https://github.com/masalinas/gscc-poc-module-gsbi.git src/app/modules/gsbi
git submodule add https://github.com/masalinas/gscc-poc-module-gspl.git src/app/modules/gspl
```

- This will pull modules (git submodules) in the module folder
- Create a file called .gitmodules to manage modules (git submodules)

# Lazy load soft links modules from app-routing.module.ts
Add Lazy load routing for the modules included:

Update portal routes
```javascript
...
  { path: 'gsbi', loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.GsbiModule) },
  { path: 'gspl', loadChildren: () => import('./modules/gspl/src/gspl.module').then(m => m.GsplModule) },
...
```

Update portal menu html 
```javascript
    <li><a routerLink="/gsbi" routerLinkActive="active">GSBI Module (Lazy Load)</a></li>
    <li><a routerLink="/gspl" routerLinkActive="active">GSPL Module (Lazy Load)</a></li>
```

## commit module changes
From module repository folder

```bash
git add .
git commit -m 'module commit'
git push origin master
```

## commit parent changes
From parent repository folder

```bash
git add .
git commit -m 'parent commit'
git push origin master
```

## clone parent with all submodules
Clone base portal and all submodules

```bash
git clone --recurse-submodules https://github.com/masalinas/gscc-poc-parent.git
```

## recursive pull all submodules changes
Pull portal and all submodules

```bash
git pull --recurse-submodules

git submodule update --remote

git add.
git commit -m 'syncronize'
git push origin master
```

## some documentation
```bash
https://git-scm.com/book/en/v2/Git-Tools-Submodules
```
