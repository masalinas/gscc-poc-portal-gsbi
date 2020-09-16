# Description
Base Modular GSCC PoC using github Submodules

This base portal implement:

- Authentication, Authorization 
- User Management
- Alarm management
- User Profile Management
- Module Management

Go to the parent repository folder and pull modules
```bash
git submodule add https://github.com/masalinas/gscc-poc-module-gsbi.git src/app/modules/gsbi
git submodule add https://github.com/masalinas/gscc-poc-module-gspl.git src/app/modules/gspl
```

- This will pull modules (git submodules) in the module folder
- Create a file called .gitmodules to manage modules (git submodules)

# Lazy load soft links modules from app-routing.module.ts
Add Lazy load routing for the modules included:

```javascript
...
  { path: 'gsbi', loadChildren: () => import('./modules/gsbi/src/gsbi.module').then(m => m.GsbiModule) },
  { path: 'gspl', loadChildren: () => import('./modules/gspl/src/gspl.module').then(m => m.GsplModule) },
...
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

## clone parent with all submodels
Clone parent project and all submodels of the project

```bash
git clone --recurse-submodules https://github.com/masalinas/gscc-poc-parent.git
```

## recursive pull all submodels changes
Pull project and all submodels of the project and syncronize the parent project

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