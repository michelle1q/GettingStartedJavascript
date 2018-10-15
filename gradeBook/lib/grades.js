var gradeBook = {
    _grades:[],
   addGrade:function(newGrade){
      this._grades.push(newGrade);
   },
   getCountOfGrades:function(){
       return this._grades.length;
   },
   getAverage:function(){
    //    return this._grades.length;
    var total=0;
    for(var i=0;i<this._grades.length;i+=1){
        total += this._grades[i];
    }
    return total/this._grades.length;
   }
};

exports.book= gradeBook;
