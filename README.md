# Limehome Challenge Submission - Sydney Thomas, Frontend Engineer

## Sydney's Notes

### UX/UI Changes / Enhancements

- The text/copy was quite confusing so I just made the best of it that I could.
- There's nowhere to submit to, so I simply give an alert and collapse all of the sections on save
- Responsive design
- The design uses a super low contrast blue/gray for each section, which i replaced with a border because it didn't pass contract guidelines for accessibility
- I added validation to the form, though since the design called for side-by-side fields on mobile, I opted not to go include inline errors for most fields. UX-wise I'm not sure how I feel about it

### What else I'd do

- I'm not crazy about the UX of the form, I'd probably not have 2 columns on mobile
- On error, scroll the first form error into view
- I'd have added a country code drowndown and validatted the phone numbers, as well as the credit card
- Unit tests
- If the form were actually being saved somewhere, a loading state on the button

## Limehome Notes

### What Limehome expects:

- Mobile-first UI adjustments: implement the provided [design](#design-materials) as close as possible using a mobile-first approach. The design should be responsive and adjust seamlessly to different screen sizes.
- Accessibility improvements: identify accessibility issues on the provided page and make the necessary adjustments to ensure that the form is accessible. Feel free to use [design](#design-materials) as a main reference, but if needed you can also implement your own suggestions.
- Accordion functionality: ensure that the accordion on the page works as expected (expand and collapse sections) and there is no errors in the console.

### What Limehome checks:

- Functionality
- Accessibility best practices (e.g. usage of labels in the form)
- Design implementation (e.g. responsive design)
- Code quality (e.g. code style)

## Technology

### Pre-requsites to run the project

- You have latest stable version of [Node](https://nodejs.org/en/download/) installed
- This project is in Angular, so you need to have [Angular CLI](https://github.com/angular/angular-cli) installed to run the project

```
npm install -g @angular/cli
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<hr />

If you have any questions or feedback about the challenge, don't hesitate to reach out to us: tech-hiring@limehome.com
Good luck with the challenge! We are looking forward to your solution!
