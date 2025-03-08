function work() {

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var job = document.getElementById('job').value;
  
 
    document.getElementById('getname').textContent = "Name: " + name;
    document.getElementById('getage').textContent = "Age: " + age;
    document.getElementById('getjob').textContent = "Job: " + job;
  }
  