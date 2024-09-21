const button=document.getElementById("start");

function openLink()
{
    const url="https://open.spotify.com";
    const windowName="chombu";
    
     // Dimensions of a new tab
    //  const width=Math.floor(screen.width/2);
    //  const height=Math.floor(screen.height/2);
     const width=800;
     const height=400;

   // Position of a tab
   const top=Math.floor((screen.height-height)/2)
   const left=Math.floor((screen.width-width)/2)    
   

    window.open(url,windowName,`width=${width}, height=${height} ,top=${top},left=${left}, statusbar=no`)
}


button.addEventListener("click",openLink)