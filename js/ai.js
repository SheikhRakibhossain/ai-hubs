const showAi = () => {
const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then((res) => res.json())
        .then((data) => cardData(data.data.tools))
        console.log(data.data.tools)
}


const cardData = (aiHubs) => {
    // console.log(aiHubs);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    // show more ai hubs code
    const showMore = document.getElementById('show-more');
    if (aiHubs.length > 6) {
        aiHubs = aiHubs.slice(0, 6);
        showMore.classList.remove('d-none');
    } else if (aiHubs.length >= 12) {
        showMore.classList.add('d-none')
    } else {
        showMore.classList.add('d-none');
    }
    //  ai hubs loops
    aiHubs.forEach((aiHub) => {
        // console.log(aiHub.id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
<div class="card h-100">
                        <img src=" ${aiHub.image} " class="card-img-top rounded img-fluid" alt="ai-image"> 
                        <div class="card-body">
                            <h4 class="card-title">Features</h4>
                            <p class="card-text">1. ${aiHub.features[0]}</p>
                            <p class="card-text">2. ${aiHub.features[1]}</p>
                            <p class="card-text">3. ${aiHub.features[2] ? aiHub.features[2] : "Not Found"} </p>
                            <p class="card-text">4. ${aiHub.features[3] ? aiHub.features[3] : "Not Found"} </p>
                        </div>
                        <div class=" card-footer d-flex justify-content-between align-items-center">
                            <div> date: ${aiHub.published_in}</div>
                            <div><button  onclick="showModalsDetails('${aiHub.id}')" class=" rounded-circle border-0 bg-info p-1" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> <i
                                        class="fa-solid fa-share-from-square"
                                        style="font-size: 1rem; padding:2px; color: rgb(5, 71, 49);"></i> </button>
                            </div>
                        </div>
                    </div>
`;
        cardContainer.appendChild(div);
    })

};


/* show more data recall all things */
document.getElementById('show-more-btn').addEventListener('click', function () {
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then((res) => res.json())
        .then((data) => cardData(data.data.tools))
         const cardData = (aiHubs) => {
        // console.log(aiHubs);
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = '';
        // show more button display none
        const showMore = document.getElementById('show-more');
        if (aiHubs.length >= 12) {
            showMore.classList.add('d-none');
        }

        //  ai hubs loops
        aiHubs.forEach((aiHub) => {
            console.log(aiHub);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
                                <img src=" ${aiHub.image} " class="card-img-top rounded img-fluid" alt="ai-image"> 
                                <div class="card-body">
                                    <h4 class="card-title">Features</h4>
                                    <p class="card-text">1. ${aiHub.features[0]}</p>
                                    <p class="card-text">2. ${aiHub.features[1]}</p>
                                    <p class="card-text">3. ${aiHub.features[2] ? aiHub.features[2] : "Not Found"} </p>
                                    <p class="card-text">4. ${aiHub.features[3] ? aiHub.features[3] : "Not Found"} </p>
                                </div>
                                <div class=" card-footer d-flex justify-content-between align-items-center">
                                    <div> <p> date: ${aiHub.published_in} </p></div>
                                    <div><button onclick="showModalsDetails('${aiHub.id}')" class=" rounded-circle border-0 bg-info p-1" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> <i class="fa-solid fa-share-from-square" style="font-size: 1rem; padding:2px; color: rgb(5, 71, 49);"></i> </button>
                                    </div>
                                </div>
                            </div>
        
        `;
            cardContainer.appendChild(div);
        })

    }

})


/* Modal api data fetch */
const showModalsDetails = (id) => {
    console.log(id);
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id} `
    // console.log(URL)
    fetch(URL)
        .then((res) => res.json())
        .then((data) => ShowSingleModal(data))
};
///*  modal details data pass function */
const ShowSingleModal = (modalData) => {
    console.log(modalData);
    const modalContainer = document.getElementById('modal-info');
    const div = document.createElement("div");
    div.innerHTML = `  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
tabindex="-1">
<div  class="modal-dialog modal-lg modal-dialog-centered ">
    <div class="modal-content">
        <div id="exampleModalToggleLabel" class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex gap-2">
            <!-- modal left part start -->
            <div class="p-2 bg-light border border-1 rounded">
                <h5>"${modalData.data.description}"</h5>
                <div>
                    <div class="d-flex gap-2 justify-content-center align-items-center py-3">
                        <div class="bg-white p-1"><p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p></div>
                        <div class="bg-white p-1"><p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p></div>
                        <div class="bg-white p-1"><p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p></div>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <div>
                            <h4>Features</h4>
                            <ul>
                                <li>F-1</li>
                                <li>F-2</li>
                                <li>F-3</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Integration</h4>
                            <ul>
                                <li>F-1</li>
                                <li>F-2</li>
                                <li>F-3</li>
                            </ul></div>
                    </div>
                </div>
                

            </div>

            <!-- modal right part -->
            <div class="p-2 bg-light border border-1 rounded ">
                <img class="img-fluid" src="1.png" alt="image">
                <h4>How are you doing today sam ?</h4>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
           
        </div>
        
    </div>
</div>
</div>`;
    modalContainer.appendChild(div);

}
// showModalsDetails();

showAi();

