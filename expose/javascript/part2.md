1. 3 The variable i is declared as var so its scope is this function and it is changed to 3 when the loop ends
2. 150 The variable discountedPrice is declared as var so its scope is this function and it is updated with the discounted value of the last element of the list.  
3. 150 The variable finalPrice is declared as var so its scope is this function and it is updated with discountedPrice that has been multplied by 100 and divied by 100.
4. [ 50, 100, 150 ]. It return an arrary of the price but 50% off. It is because the function just cuts a desired percentage off from the array of number it has given.
5. ERROR, because now i is declared as a let variable, it only exist in the for loop so if we call it outside of the for loop we would have an error.
6. ERROR, because now discountedPrice is declared as a let variable, it only exist in the for loop so if we call it outside of the for loop we would have an error.
7. 150 Even finalPrice is now declared as a let variable we are still calling it from the same block so it works fine.
8. [ 50, 100, 150 ] The function returns the same thing, changing from var to let does not alter the function outcome because all the update of the array items are within the for loop and the let variable scope.
9. ERROR, because i is declared as a let variable, it only exist in the for loop so if we call it outside of the for loop we would have an error.
10. 3 Length is declared as a const variable and it has a scope of this function. Since it was not altered nor are we out of the scope it works fine.
11. [ 50, 100, 150 ]. The function worked fine. Even though there is a const variable declared in the for loop, the natuer of for loop means that every iteration of the loop it destroys the old const variable and create a new one so there is no conflicts.
12. Answer:
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. 