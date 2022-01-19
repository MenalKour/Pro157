AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "iron-man",
          title: "Iron Man",
          url: "../assets/iron-man.jpg",
        },
        {
          id: "dr-strange",
          title: "Dr Strange Master Of Mystic Arts!",
          url: "../assets/doctor-strange.jpg",
        },
  
        {
          id: "thor",
          title: "The Mighty Thor",
          url: "../assets/Thor.jpg",
        },
        {
          id: "spider-man",
          title: "Friendly Neighborhood Spider-Man",
          url: "../assets/spider-man.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id);
        // Thumbnail Element
       const thumbnail=this.createThumbnail(item)
       borderEl.appendChild(thumbnail);
        // Title Text Element
        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id);
      entityEl.setAttribute("visible",true);
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:25})
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"#000000",
        opacity:0.2
      })
      return entityEl;
    },
  createThumbnail: function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:25})
    entityEl.setAttribute("material",{src:item.url})
    return entityEl;
  },
  createTitleEl: function(position,item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("text",{
      font:"exo2bold",
      fontSize:200,
      align:"center",
      width:60,
      color:"#E65100",
      value:item.title
    })
    const elPosition=position
    elPosition.y=-20
    entityEl.setAttribute("position",elPosition)
    entityEl.setAttribute("visible",true)
    return entityEl;
  }
  });
  