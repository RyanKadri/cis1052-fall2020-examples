setTimeout(function(){ 
  console.log("Hello") ;
  setTimeout(function(){ 
    console.log("my");
    setTimeout(function(){ 
      console.log("name");
      setTimeout(function(){ 
        console.log("is");
        setTimeout(function(){ console.log("Iroh") }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);