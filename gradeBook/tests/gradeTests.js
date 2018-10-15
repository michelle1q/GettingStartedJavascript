var book=require("../lib/grades").book;

exports["Can add new grades"] = function(test){
    book.addGrade(90);

    var count=book.getCountOfGrades();
    test.equal(count,1);
    test.done();
}

exports["Can average grades"]=function(test){
    book.addGrade(100);
    book.addGrade(35);

    var average=book.getAverage();

    test.equal(average,75);
    test.done();

}