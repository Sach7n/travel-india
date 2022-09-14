import React from 'react'
import { useRef, useCallback, useState } from "react";
import Progress from "./Progress"


export default function AddItem() {

    const [file, setFile] = useState(null)
    
    console.log("### Refreshing");
    const nameInputElement = useRef();
    const attractionInputElement = useRef();
    const typeInputElement = useRef();
    const besttimeInputElement = useRef();
    const nearestairportInputElement = useRef();
    const descriptionInputElement = useRef();
    const destinationInputElement = useRef();
    const averageTempInputElement = useRef();
    const pictureInputElement = useRef();
    const formRef = useRef();

    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();
            const data = {
                name: nameInputElement.current.value,
                attraction: attractionInputElement.current.value,
                type: typeInputElement.current.value,
                besttime: besttimeInputElement.current.value,
                nearestairport: nearestairportInputElement.current.value,
                description: descriptionInputElement.current.value,
                destination: destinationInputElement.current.value,
                averageTemp: averageTempInputElement.current.value,
                picture: pictureInputElement.current.files[0]

            };
            console.log(data)
            // console.log(fullNameInputElement);
            if(data!=null)
            {
            setFile(data)
            }
            else{
            console.log("no data")
            }

            formRef.current.reset();
        },
        []
    );
    console.log(file)
        
    return (
        <div className='addItem_form'>

            <form class="w-full max-w-lg" ref={formRef} onSubmit={formHandler()}>
                <div class="flex flex-wrap -mx-3 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label 
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        for="grid-picture">
                            Insert picture
                        </label>
                        <input 
                        ref={pictureInputElement} 
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-picture" 
                        type="file" />
                    </div>

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                               for="grid-first-name">
                            Name
                        </label>
                        <input 
                            ref={nameInputElement} 
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="grid-first-name" 
                            type="text" 
                            placeholder="Miami" />

                        <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                   for="grid-attraction">
                                Attraction
                            </label>
                            <div class="relative">
                                <select 
                                ref={attractionInputElement} 
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-attraction">
                                    <option>Beach</option>
                                    <option>Architecture</option>
                                    <option>Mountains</option>
                                    <option>Nature</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-type">
                                Type
                            </label>
                            <div class="relative">
                                <select ref={typeInputElement} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-type">
                                    <option>Cruise</option>
                                    <option>Adventure</option>
                                    <option>Eco</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                   for="grid-best-time">
                                Best time to visit
                            </label>
                            <div class="relative">
                                <select ref={besttimeInputElement} 
                                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                        id="grid-best-time">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                   for="grid-nearest-airport">
                                Nearest airport
                            </label>
                            <input ref={nearestairportInputElement} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nearest-airport" type="text" />
                        </div>

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                                Description
                            </label>
                            <input ref={descriptionInputElement} 
                                   class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                   id="grid-description" 
                                   type="text" />
                        </div>

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-destination">
                                Destination
                            </label>
                            <input ref={destinationInputElement} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-destination" type="text" />
                        </div>

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-temprature">
                                Average temprature
                            </label>
                            <input ref={averageTempInputElement} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-temprature" type="text" />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </form>
            {file && <Progress file={file} setFile={setFile}/>}
        </div>
    )
}
