// Wrap every letter in a span

let index = 0

let arrayHeader = ['Similarities', 'Presence', 'Emotion', 'Medium', 'Variety', 'Final', 'Reason' ]
    let arrayContent = [ 
     ' Code. <span class="highlight-container"><span class="highlight">A secret set of rules</span></span> only a few scientists back in 1950’s were qualified to comprehend. A manner of communication, capable of interacting with metals and electrons, to ultimately<span class="highlight-container"><span class="highlight">expect a desired solution.</span></span>. A source of sole non-static dialogue between the programmer and a computer.  A way to set foot into the brain of a digital instrument and to then a construct a path for the purpose of eventually understanding us.',
     'Code is around us. Humans have endlessly modified it’s syntax or altered its set of expressions. In similarity to a language, it is in constant evolvement. We can’t type this text without the mysterious wonders of code. It is impossible to display graphics without complex structural algorithms. All systems and online platforms are carved by the agency of code. ', 
     'As two humans sometimes do not find a common ground, computers are prone to also yell at a human. A computer will have the audacity to<span class="highlight-container"><span class="highlight">throw an error to the programmer,</span></span> causing the human to become frustrated. This common issue yields to a from of a disagreement with the non-animated object and a breathing being. ',
     'Recently, code has become a <span class="highlight-container"><span class="highlight">a medium for creativity.</span></span> . It sees the world and ideas from a different perspective and modifies existing rules to set a new basis for interpretation.  It has enabled us to construct visually eye-pleasing pieces humans can admire. From the first five tetrominoes to the advancements of 3D digital art, code has always been used to create art. ',
     'Code can not only create interesting discernible pieces of art but can also present various artistic works such as music. Once we finish asking a program to <span class="highlight-container"><span class="highlight">execute a specific task</span></span> , wavelengths are bounced on our ear drums to then provide us with a rush of glee or discomfort. ',
     'Code serves as an accessible material in which one has the opportunity to construct complex structures for the sake of art. A frame of practice applies this material to <span class="highlight-container"><span class="highlight">produce new visual ideas.</span></span> . In a world where we are in constant exposure to digital devices, code is a language that isn’t yet ready to disappear. ',
     'As we enter into a digital space more complex and pertinent than ever before, we cannot deny its importance and relevancy. Consequently, it is, by any means, necessary for artist, of any field, to learn this material. Not only their understandings in technology will broaden, but it will be a way to interfere in another discipline in hopes of acquiring expertise. '

    ]


function headerAnim(word){
  var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = word.replace(/\S/g, "<span class='letter'>$&</span>");


    document.getElementById('header-text').classList.remove('hide');  
    anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 250 * (i+1)
  });
}


  setTimeout(function(){
    document.getElementById('top-line').classList.remove('hidden');  //questions and answers appear 
	
    anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700,
   
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em",
   
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  });

  }, 15000) 

  function previousPage(){
    let goBack = document.getElementById('previous')
    
    if(index === 1){
     console.log('index is 0')
      document.getElementById('content-text').innerHTML = 'Language is everywhere. we allow it to share our thoughts, express our knowledge and enhance or destroy relationships. Language is at all times present, and will persistently be. However, so are computers. How do computers display desired information? Well, we tell it do so. We speak to the computer a certain language and it “magically” responds. A language we are not necessarily asked to learn, but are pushed to trust its semantics.  A language a human can write and a computer can interpret is therefore considered an essential material for our modern era.  What is this language called? <span class="highlight-container"><span class="highlight">Code.</span></span>  However, before we bring up the involvement of code for an artist, we must emphasize on the similarities between language and code. '
      index = 0

    } else {
      document.getElementById('content-text').innerHTML = arrayContent[index - 2]
      index = index - 1
    }
   
    
  }
 

  function show(){


 
    document.getElementById('header-text').classList.add('hidden');
    
  
    if(index != arrayContent.length ){ setTimeout(function(){
  
      document.getElementById('content-text').classList.add('hidden');
       
    
        console.log('before', index)
      
          headerAnim(arrayHeader[index])
        
      
    setTimeout(function(){
      document.getElementById('header-text').classList.remove('hidden');
      

    }, 500)

    setTimeout(function(){
      document.getElementById('content-text').classList.remove('hidden');
      document.getElementById('content-text').innerHTML = arrayContent[index]
      index++

    }, 2000)
   
}, 2000)


    } else {
      setTimeout(function(){
  
      
      headerAnim('End')
          
        
      setTimeout(function(){
        document.getElementById('header-text').classList.remove('hidden');
        
  
      }, 1000)
    }, 3000)
     

    
    
  }}

  let checked = false;

function handleClick(event) {
    checked = confirm('Marking disclosures as sent will lock the value.');
    event.target.checked = checked;
}

  console.log('index', index)

  headerAnim('Language')