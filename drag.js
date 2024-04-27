const dragables = document.querySelectorAll('.task');
const dropables = document.querySelectorAll('.lane');

dragables.forEach((task)=>{
    task.addEventListener("dragstart", ()=>{
        task.classList.add("is-dragging");
    })
    task.addEventListener("dragend", ()=>{
        task.classList.remove("is-dragging");
    })
});

dropables.forEach((zone)=>{
    zone.addEventListener("dragover", (e)=>{
        e.preventDefault();
        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");

        if(!bottomTask) {
            zone.appendChild(curTask);
        }else{
            zone.insertBefore(curTask, bottomTask);
        }
    })
})

const insertAboveTask = (zone, y) => {
    const ele = zone.querySelectorAll(".task:not(.is-dragging)");
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY;
    ele.forEach((task)=>{
        const { top } = task.getBoundingClientRect();
        const offset = y - top;

        if(offset < 0 && offset > closestOffset){
            closestOffset = offset;
            closestTask = task;
        }
    })
    return closestTask;
}

