import { HiChevronDoubleRight } from "react-icons/hi";
import '../styles/Content.css'


export const MaybePost = props => {
  return (
    <div className="post" style={{ width: props.width + "%" }}>
      <div className="post-container">
        <img src="https://picsum.photos/300/200" alt="" />
        <div className="preview">
          <h2>{props.title}</h2>
          <p>fecha acá</p>
          <br />
          <h4>
            {props.content}
          </h4>
          <br />
          <h4 className="read-more">
            Read more
            <HiChevronDoubleRight />
          </h4>
        </div>
      </div>
    </div>
  );
}

const Post = () => {
  return (
    <article className="post">
      <div className="post-container">
        <img src="https://picsum.photos/300/200" alt="" />
        <div className="preview">
          <h2 class="post-title">Title placeholder</h2>
          <p className="post-date">August 18, 2021</p>
          <br />
          <p className="post-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            libero ratione corrupti eos rerum vel praesentium possimus officiis
            ab commodi aspernatur laudantium neque, suscipit voluptatem nisi
            repellendus officia quia atque!
          </p>
          <br />
          <h4 className="read-more">
            Read more
          </h4>
        </div>
      </div>
    </article
  );
};

const Content = () => {
  return (
    <main className="main-content">
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default Content;
