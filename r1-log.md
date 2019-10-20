# Starting 100DaysOfCode


### R1D1 - sept 8/19
Today I was reading [DOMenlightment](http://domenlightenment.com/) to refresh my DOM manipulation skills, sofar I like it its so detailed.

I also coded a simple app using HTML,CSS,JavaScript.The programm counts the number of clicks of a button and updates the html page.

Link to work: [JS File](https://github.com/mesfint/100-days-of-code/blob/master/codes/script_R1D1.js)


==================
### R1D2 - sept 9/19
Today I was watching tutorials about date and time manipulation in javascript,
also start to make a simple javascript clock, I will share the code tommorow.

==================
### R1D3 - sept 10-11/19
I make digital jsClocck, the challenge here was to figure out updating seconds every one second, then `setTimeout`come to rescue.I am planning to extend this app a little bit more useful project in the future.

Link to work: [JS Code](https://github.com/mesfint/100-days-of-code/blob/master/codes/index_R1D2.html)

==================
### R1D4 - sept 13/19
Rewrite the Js digital clock, Learn scope of variables and `setTimeout vs setInterval`.I also learning jquery today from Udemy, planning to make a small project using jquery. 

Link to work: [JS Code](https://github.com/mesfint/100-days-of-code/blob/master/codes/R1D4_reWrite_D3.html)

==================
### R1D5 - sept 14/19
Refreshing my HTML/CSS/Js skills, Mainly I will be doing a course given by [FrondEnd Master] (https://frontendmasters.com/bootcamp/).The course is sheduled for two weeks, I am trying to finish it on time.

### Thoughts:
So far I like the style of the course, not so detailed but as referesher its enough.Based on the schedule there in the css part creating layouts (floats and FlexBox) are going to be interesting. 

Link to work: [ Code](https://github.com/mesfint/100-days-of-code/blob/master/codes/R1D5.html)

==================
### R1D6 - R1D7 - sept 15-16/19
Continue working on HTML and external css from frontEndmaster bootcamp.
I refresh Float layout and FlexBox work on simple pages to concrete the  concepts.
### Thoughts:
Designing simple site using HTML and external css also a blog site, The blog site is a mix of float and flexbox layout design.So far I am learing nice tricks and working habits.


Link to work: [ Simple HTML page and Blog site](https://github.com/mesfint/100-days-of-code/blob/master/codes/R1D6.html),(https://github.com/mesfint/100-days-of-code/tree/master/codes/R1Dblog-begin)

==================
### R1D8 - R1D11 - sept 17-20/19
HTML form with external css designed, the form was able to submit values to server using a predefined server side script.

### Thoughts:
I learned few trics specially aligning input feilds,  converting lables to block element solves many layout headechs


Link to work: [HTML form](https://github.com/mesfint/100-days-of-code/tree/master/codes/begin)

==================
###  R1D12 -sept 21/19
Rewrite HTML form from scratch with external css , the form is not submiting values to anywhere, for now but will implement the submition 
in future.

### Thoughts:
I practice some designing form as well as learn some tricks specially on layout.


- Link to work: [HTML form](https://github.com/mesfint/100-days-of-code/tree/master/codes/R1D12_formRewrite)
- Form with Gif Anim: [Form](https://gyazo.com/6c391ba9f476d81cae87c3f3a8f52dab)

==================
###  R1D13- sept 22/19
Today I was working on calculator layout design using only HTML and css.The tutorial was from frontEnd master "Jen", Her methods were so understandable , I tried to sometime ago to make calculator design but never been easy, but thanks to jen, now got all the tricks.The design is also a preparation for the next javasccript section where we I will make the interaction of the calculator, the javascript course is given by Brian Holt.

### Thoughts:
I practice  designing Calculator also the steps where to start, Jen showed us always to start from the easy section, then evetually move to the complex one, which makes sense at least in this task.I apply FlexBox to make the grid, also used HTML predefined character code for function buttons of the calculator.I am planning to rewrite the calculator design soon.
- [HTML character codes](https://www.toptal.com/designers/htmlarrows/math/)

- Link to work: [HTML Calculator](https://github.com/mesfint/100-days-of-code/tree/master/codes/calculator/begin)

==================
###  R1D14- sept 23/19
Today I was watching The JS part of FrontEnd Master by Brian Holt.Though the first couple of the setion are pretty basics but still I decide to watch to referesh my Js memory,also practice the excersises. Brian is at the moment Microsoft developer, he is super talented.The JS section is about 5(five)hrs lecture, I am planning to finnish in the coming 2(two) days.

### Thoughts:
I like so far the scope and methedology of the lecture, plus the excersices are also challenging which is greate opportunity to crystalize the concepts.

- I will share the codes as I work more on the excercies.

==================
###  R1D15- sept 24/19
Today Contiuned working on FrontendMasters Bootcamp course Js section.I was working on the "Quiz Excercise". The teacher has done some part of it, all functions were created inadvance, also Test scripts were written by the teacher.My task was to implement the logic under every function, I am happy that I got right most of the tasks, I google only for few issues, I promised to myself to try or dig as much as I can no cheating. The teacher though encourages to see the answer, but I decided to struggle whic

h is worth at the end
The following is part of the code, I am attaching here below the link for the final and complete virsion.
    
```
 let points = 0;

function australia(userAnswer) {
  // what is the capital of australia?
  // 100 pts
  const isCorrect = userAnswer === 'Canberra';//serAnswer.toUpperCase() === 'CANBERRA'; this also OK
  
  if (isCorrect) {
    points += 100; 
  }
  return isCorrect;
}

function canada(userAnswer) {
  // what is the capital of canada?
  
  const isCorrect = userAnswer.toUpperCase() ==="OTTAWA"
  if(isCorrect){
      points += 100; 
     }
  return isCorrect;
  // 100 pts
  
}

function uppercase(userAnswer, word) {
  // what is <word> in all capital letters?
  const isCorrect = userAnswer === word.toUpperCase();
  if(isCorrect){
    points += 200;
     
     }
  return isCorrect;
  // 200 pts
  
} 
```

    
Today Contiuned working on FrontendMasters Bootcamp course Js section.I was working on the "Quiz Excercise". The teacher has done some part of it, all functions were created inadvance, also Test scripts were written by the teacher.My task was to implement the logic under every function, I am happy that I got right most of the tasks, I google only for few issues, I promised to myself to try or dig as much as I can no cheating. The teacher though encourages to see the answer, but I decided to struggle which is worth at the end
Today Contiuned working on FrontendMasters Bootcamp course Js section.I was working on the "Quiz Excercise". The teacher has done some part of it, all functions were created inadvance, also Test scripts were written by the teacher.My task was to implement the logic under every function, I am happy that I got right most of the logics, I google only for few issues, I promised to myself to try  as much as I can and do  no cheat my self. The teacher though encourages to see the answer, but I decided to struggle which is worth at the end.

### Thoughts:
I like the excercises they are intutive to me, At first looks scary an dno clue what to do, but as read the overall code got the idea and slowly I manage to figureout the tasks and finished all.

- Link to work: [Quize Excercise](https://codepen.io/mesfint/pen/pozGaoj?editors=0010)

==================
###  R1D16-17- sept 25-26/19
In the last 2 days I was still working on Javascript section from FrontEnd Master - Brian Holt, finished the Object and Array section. Yesterday I haven't done much due to some family comitments.I will continue to work on this bootcamp till the end.

### Thoughts:
Brian is so much knowledgable, I can't thank him enough.

- I will share the codes as I work more on  excercies.

==================
###  R1D18-31 - Oct 11/19
I have been working on the [Frontend Master](https://frontendmasters.com/bootcamp), for the last 14 days , the section I was  mainly working on JS pojects. The projects are explained as follows.

## 1.  JS calculator
![Calculator specification](https://github.com/mesfint/100-days-of-code/blob/master/codes/calculator/calculator-spec.png "Calculator").

 The calculator has basic functionality but each operator functions are  implemented.

### Thoughts: 
Creating Calculator sounds a little bit daunting at the begning, however deviding the functions of each button logically can make once life so easier. The buttons are devided into operators and symbols where each of them working same way. Therefore he uses only 6 functions to handle the over calculator operation.

## 2. Image gallery slider
 The Image gallery was the second project in this module. The gallary was built in two versions,
 i.  Only with  JS Vanilla
 ii. Using third party librarys called [swiper.js](https://swiperjs.com/get-started/) and [popmotion/pure](https://popmotion.io/pure/).
 
2.1     Link to work:   [Js Image gallary](https://github.com/mesfint/100-days-of-code/tree/master/codes/imageGallery)

2.2     Link to work:   [Third party library version](https://github.com/mesfint/100-days-of-code/tree/master/codes/imageGallery_Library_Version)

### Thoughts: 
This project is relatively the easier one.The main goal of the project was  to use DOM and add event listeners to buttons to trigger the forward(Next) and backward(Prev) features.Handling these events are the key. Understanding weather the image is the current active also deactivating the buttons when there is no more images left to scroll.
## 3.  Dog viewer, 
This is  api based project where, the app consumes a simple  api json data from [dog api ](https://dog.ceo/dog-api/), and update the UI, based on the selected dog type from dropdown list.This type of project is the common in a daily rutine in a real developer job.
- The app is developed in away that the selected dog image is rendered everytime a user clicks one from the list.
- I used fetch which relatively a new way of fetching data across api and returns promise(success/faild)

Link to work:   [dog viewer](https://github.com/mesfint/100-days-of-code/tree/master/codes/dogGenerator)

### Thoughts: 
This project a real world project, fetching data from an api and utilizing it sounds tricky but enjoyed the steps. On the otherhand DOM manipulation also a thing in this project, without it its not posible to update the UI.


## 4. Feed-A-Star-Mole
This the last project in the bootcap module, which is prety advanced and complex. Brian Holt, was doing the problem one feature at a time, though its a personal style but still makes sense.The project is somehow hard to follow alongside with the teacher but  still manageable to grasp.The logic flow is somehow looks complicated lengthy, but still not as hard as i tought.

Link to work:   [Feed-A-Star-Mole](https://github.com/mesfint/100-days-of-code/tree/master/codes/Feed-A-Star-Mole-game/begin)

### Thoughts: 
I learn how to break a huge task that looks scary at the begning into small pieces and solve one problem at a time also adding one feature at a time.I also  learn its good practice to leave a sensible comments along the way even the features you plan to make otherwise you will forget it.
- Visualizing the overall project and anticipate the outputs inadvance by giving sometime to the project is very crucial one.
- Going back and forth is also a common practice such as updating/adding or deleting some features.

==================
###  R1D32- Oct13/19
I started to study [frontendmasters](frontendmasters.com) web development path, and today I was working on first HTML project, its a static  news site. Its good to refresh my HTML and CSS skills. I use Flex for the layout. Soon I will go through how the teacher(Brian Holt) would solve it, but first I wanted to accomplish it as much as I can.

### Thoughts: 
Its nice always to start from the basic one and its eventually very helpfull to tackle advanced tasks.

Link to work: [HTML Project1 code](https://github.com/mesfint/100-days-of-code/tree/master/codes/frontEndMaster_Web_Dev/HTML_Project1).

 [Teacher Complete version:](https://btholt.github.io/intro-to-web-dev-v2/news.html)
  
  ==================
###  R1D33-34- Oct15/19


 
 Today I Continued on web-development-v2 from 
@FrontendMasters study about Parcel,Node.js, Git and bash and Popmotion library by @holtbt. The course was somehow scraching the surface, its not deep but gave me quite broad overview on these technologies, I will work on the task given by the teacher

 [Extend this project](https://btholt.github.io/intro-to-web-dev-v2/node)

### Thoughts:
This section of the course is the last part of the first module, I am happy that manage to work on this far.Will continue and update my log.

  ==================
###  R1D35- Oct16/19
Today I spend about an hour doing this excercise,The excercise is just to have a nodejs basic understanding, router also fetching data from files read them, then update the UI which is triggered by button event listener.Even If the task is not that difficult, but i see the complete picture of full stack development.I am continuing  studying from frontendmaster,The next part is 
' Getting Started with JavaScript, v2 ' by Kyle Simpson:< You Don't Know JS >, Its a 2 and half hrs course.

### Thoughts:
So far the material is understandable and the teacher is knowladgable. I am happy working on this course.

[Link to work](https://github.com/mesfint/100-days-of-code/tree/master/codes/frontEndMaster_Web_Dev/node-example)

  ==================
###  R1D36- Oct17/19

Working on getting-started-javascript-v2 bye kyle from [@frontendmasters],(frontendmasters.com),This section is the first part from the teacher's 'You don't know JS' book series.I am enjoying his insightfull teaching style and knowledge.I will keep on working on the chapter.  

### Thoughts:
I manage to do the first excercise from this chapter without seeing teacher's solution.

  ==================
###  R1D37-38 - Oct17/19
Working on the excercise of getting-started-javascript-v2 section. The 3 Pillars of JS, So far fairly understandble.
1.    Types / Coercion
2.    Scope / Closures
3.    this / Prototypes 

Applying them into action seems scary, but managable.

### Thoughts:

Closure seems there all the time, but the key is recognizing it. While writing a code, recognize closure is being appeared.

  ==================
###  R1D39 - Oct20
Completed  ' Three Pillars of JS ' excercise from getting-started-javascript-v2.Now I need to crystalize the Pillars concept and try to do more tasks untill I get them stick in my head.

### Thoughts:
The Idea of the three Pillars is the core concept for Js programming, I felt that once I master these concepts, my work on JS will be more easier than before.

[Link to work](https://github.com/mesfint/100-days-of-code/blob/master/codes/frontEndMaster_Web_Dev/Three-Pillars-of-JS-exercises/three-pillars/ex.js)