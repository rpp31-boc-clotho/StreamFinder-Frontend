# StreamFinder - Client Site
## A Clotho WebApp 2022
### HackReactor - RPP31

## Description

Stream Finder is project developed by Hack Reactor, a software engineering boot-camp, that pushed the boundaries of our full stack knowledge.

Throughout this endeavor, we as a team of eight, increased our proficiency with CI/CD, React, CSS, testing, express, MongoDB, and other concepts/tools.

Our own API hosted on AWS provides the data we need to display and we use these resources to build the features and content for a robust, familiar, and enjoyable user experience.

## Features

### 1. Landing Page

**Purpose**

The Landing Page is the front page of Stream Finder, providing both users and guests a front view of what the site has to offer with multiple horizontal scrolling displays of various movies and shows. All users have access to two displays: Popular Movies and Popular TV shows. For registered users we have also included a Recommendations List, Recently Watched, and a Watch List.

*Popular Movies and Popular TV shows*

Utilizing our API we recommend to both guests and users popular media, with Films and Series having their own respective horizontal bar. Entertainment that is currently trending is displayed in order of rating.

![popularMoviesExample](https://user-images.githubusercontent.com/82406930/156897090-2da0d893-19a1-4b4b-94ea-d98f39061d06.gif)

![popularShowsExample](https://user-images.githubusercontent.com/82406930/156897094-349562e6-0be9-4dcb-a38b-c20bc4ee146e.gif)

*Recommended Titles*

The recommended Titles bar returns a list of movies and shows the user would most likely enjoy based on their previously viewed/added films and passed through an algorithm provided by the API.

*Recently Watched*

Any media that the user has clicked through to a respective streaming website is added to this list. For example, if the user navigated to a film on Netflix by using the Netflix link on the movie details page, that film would then automatically be added to this bar.

*Watch List*

This section is a list of media the user can add to. On each Media Info page is an option to add  Film or Show to watch list, when clicked it is added to this list. The button nest to the watch list link directly to the search page, giving users an opportunity to find Movies or series to add to their watch list.

![remainderExample](https://user-images.githubusercontent.com/82406930/156897095-0e2aef56-381c-46e5-be81-ff1c1df96f87.gif)

### 2. Media Info Page

**Purpose**

The Media info page provides a detailed view of a Movie or Series.  All details relating to any particular media can be found on this page. It is navigated to from either the search page or the landing page.

*Media Info*

The top component contains all the specific details related to the film or series available to us through the API. It includes a picture of the title card (if provided), the title, the date released, a brief description of the media, and the current rating provided by the API.

![detailsExample](https://user-images.githubusercontent.com/82406930/156896464-f46c3348-bb83-4489-bce8-5ab0c90f3d20.gif)


*Available Service Providers*

This section shows all platforms the media can be found on. It lists them by name, as well as the pricing it would cost to subscribe or purchase the service it is available on. Each service is a link to the home page of that service. If the media is not available to stream, a message appears stating it is not currently available.

![providerClickExample](https://user-images.githubusercontent.com/82406930/156896487-50f5024f-cd5c-4447-ba66-80890d167bf6.gif)

*Reviews*

The reviews section is a list of reviews provided by our users. The reviews themselves are displayed to everyone, but only registered users can add a review. The current total amount of reviews available is displayed in the review header, as well as how many of those users gave it a thumbs up or thumbs down rating.

The review component itself contains five parts, the user name, the users image, the date posted, a thumbs up or thumbs down, and the text of the review itself.

When logged in the Add A Review button is displayed, which when clicked creates a pop up modal for the user. It includes a thumbs up or thumbs down button to select, as well as a text box to enter the review in. All other information is added automatically.

![reviewExample](https://user-images.githubusercontent.com/82406930/156896491-9462ee79-f615-457a-b502-4429ba86bca0.gif)

### 3. Search Page

**Purpose**

The search page is were results from any search are displayed. Any time the search bar is utilized, it redirects to the search page and displays the top results.

*Search Bar*

The search bar is how the user will search of any specific media. It searches all media through the API, and can be filtered via media type. The search bar component is placed throughout the website in the navigation bar, available on the landing page and at the top of the search page. Anything that is searched in the search bar will redirect to the search page, displaying all the results that relate to the searched within the title of the media.

![searchbarExample](https://user-images.githubusercontent.com/82406930/156896929-ab6b9750-4fbe-45d9-b68c-6a527d77ce97.gif)

*Filter Buttons*

The filter buttons allow the user to customize their search between Movies, Shows, or both forms of media. When each button is clicked the text changes to reflect which filter is currently active. By default all searches made outside of the search page search through both Movies and Shows.

![filterMoviesExample](https://user-images.githubusercontent.com/82406930/156897103-ffaff092-ec39-464e-af34-d5b189d7b868.gif)

*Search Results*

The results contain the top 20 (if available) media cards that best relate to the search term used. If searching through both Movies and Show, it instead displays up to 40 media cards, 20 from each type of media. They are always ordered by rating, from highest rated to lowest rated. These media cards show a title card image (if available), the title and the rating.

![filterShowsExample](https://user-images.githubusercontent.com/82406930/156897111-8b214a11-c424-48ad-8f06-c393d532a0c7.gif)


### 4. Login and User Settings

**Purpose**

User login is required to access additional features (such as the ability to write reviews) and retain user information to personalize viewing options, maintain a watch history and watch list, and recommend titles for viewing.

*Login Methods*
The user can create an account and login using their email, Google account, or Facebook account.

![loginExample](https://user-images.githubusercontent.com/82406930/156829558-43c2a0df-3a82-4e80-879e-5367c1d24eb4.gif)

*Manage Subscriptions*
The user can specify which streaming services they subscribe to help identify the best viewing options of selected titles.

![subscriptionsExample](https://user-images.githubusercontent.com/82406930/156829791-72e2d027-d445-4a9d-b42e-01c9864db18c.gif)

*Display Activity*
The users most recently watched movies and/or shows are displayed. This feature will be better utilized when the social aspect is added.

![activityExample](https://user-images.githubusercontent.com/82406930/156829829-25d8dbac-8a58-44fe-9639-26a6122f35d6.gif)

---
**Contributors:**
- *Chris Lazzarini - Product Manager*
- *Chris Turcios - Architecture Owner*
- *Adam Lohnes - UI Owner*
- *Joey Dowling - Software Engineer*
- *Juan Acosta - Software Engineer*
- *Michael Lee - Software Engineer*
- *Mike Pollens - Software Engineer*
- *Sangeetha Nair - Software Engineer*

**[link to API Documentation](https://github.com/rpp31-boc-clotho/boc-client/blob/master/API-Routes.md)**
