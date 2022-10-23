import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
//import { Tag } from 'react-feather';
import TableOfContents from '../components/table-of-contents'
import CodeBlock from '../components/codeblock'
import fs from 'fs'

export default function Home({text}) {
  const H1 = ({ node, ...props }) => {
    return (
      <h1 id={node.position?.start.line.toString()}>{props.children}</h1>
    );
  };
  const H2 = ({ node, ...props }) => {
    return (
      <h2 id={node.position?.start.line.toString()}>{props.children}</h2>
    );
  };
  const H3 = ({ node, ...props }) => {
    return (
      <h3 id={node.position?.start.line.toString()}>{props.children}</h3>
    );
  };
  const H4 = ({ node, ...props }) => {
    return (
      <h4 id={node.position?.start.line.toString()}>{props.children}</h4>
    );
  };
  const H5 = ({ node, ...props }) => {
    return (
      <h5 id={node.position?.start.line.toString()}>{props.children}</h5>
    );
  };
  const H6 = ({ node, ...props }) => {
    return (
      <h6 id={node.position?.start.line.toString()}>{props.children}</h6>
    );
  };

  return (
    <div className="bg-[#f5f6f6] lg:pl-20 lg:pr-20 lg:pt-10 pb-10 lg:pb-28 lg:flex">
      <div className="w-auto bg-white lg:w-2/3 pl-8 pr-8">
        <div className="lg:hidden w-auto p-5">
          <TableOfContents body={text}/>
        </div>
        <div className="markdown">
          <ReactMarkdown
          rehypePlugins={[rehypeKatex]}
          remarkPlugins={[remarkMath]}
          components={{
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            h6: H6,
            code: CodeBlock}}>
              {text}
          </ReactMarkdown>
        </div>
      </div>
      <div className="hidden w-64 pl-5 pr-5 lg:block">
        <TableOfContents body={text}/>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const text = fs.readFileSync('markdown/blocking-circuit.md', 'utf8');
  //console.log(text)

  return {
    props: {
      text: text,
    },
  };
};