const dragStart=e=>{
    target=e.target;const
}
e.dataTransfer.setData('card_id',target.id);
setTimeout(()=
},0);
  target.style.display="none";
const dragover=e=>{
e.stopPropagation();|
return(
<div
>
  id={props.id}
  className={props.className}
  draggable={props.draggable}
  onDragStart={dragStart}
  onDragover={dragover}
  {props.children}
</div>