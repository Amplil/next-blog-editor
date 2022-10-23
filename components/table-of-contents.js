import ReactMarkdown from 'react-markdown'
export default function TableOfContents({ body }){
  const ankerLink =(h_num) => {
    let num=0;
    if(h_num >= 1)num=h_num-1;
    return function anker({ node, ...props }) {
      return (
        <a href={"#"+node.position?.start.line.toString()}>
          <li className="text-gray-500 hover:bg-gray-200">{'　'.repeat(num)+props.children}</li>
        </a>
      );
    }
  };

  return (
    <ul>
      <div className=" bg-gray-200">目次</div>
      <ReactMarkdown
      allowedElements={["h1","h2","h3","h4","h5","h6"]}
      components={{
          h1: ankerLink(1),
          h2: ankerLink(2),
          h3: ankerLink(3),
          h4: ankerLink(4),
          h5: ankerLink(5),
          h6: ankerLink(6),}}>
          {body}
      </ReactMarkdown>
    </ul>
  );
};
