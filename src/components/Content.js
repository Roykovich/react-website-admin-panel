import { HiChevronDoubleRight } from "react-icons/hi";
import "../styles/Content.css";

export const MaybePost = ({ src, title, content }) => {
  return (
    <article className="post" style={{ minWidth: "100%" }}>
      <div className="post-container">
        <img src={src} alt="" />
        <div className="preview">
          <h2 class="post-title">{title}</h2>
          <p className="post-date">Date Here</p>
          <br />
          <p className="post-description">{content}</p>
          <br />
          <h4 className="read-more">Read more</h4>
        </div>
      </div>
    </article>
  );
};

const Post = ({ src, description }) => {
  return (
    <article className="post">
      <div className="post-container">
        <img src={src} alt="" />
        <div className="preview">
          <h2 class="post-title">Title placeholder</h2>
          <p className="post-date">August 18, 2021</p>
          <br />
          <p className="post-description">{description}</p>
          <br />
          <h4 className="read-more">Read more</h4>
        </div>
      </div>
    </article>
  );
};

const Content = () => {
  return (
    <main className="main-content">
      <Post
        src="https://picsum.photos/600/400?random=1"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus debitis voluptate, itaque pariatur sunt repellendus sed tempore harum beatae repellat."
      />
      <Post
        src="https://picsum.photos/600/400?random=2"
        description="Ipsa cupiditate laudantium nobis optio hic tenetur explicabo? Eaque, doloribus! Quo consequatur, ex ad non quasi commodi ducimus sed amet!"
      />
      <Post
        src="https://picsum.photos/600/400?random=3"
        description="Aspernatur consequuntur optio fuga aliquam non recusandae vel, pariatur neque iure unde veritatis repellendus nesciunt sunt. Quos voluptate quis quibusdam?"
      />
      <Post
        src="https://picsum.photos/600/400?random=4"
        description="empora libero totam dignissimos alias saepe omnis in delectus magni recusandae blanditiis dicta eum debitis eveniet, placeat sunt dolorum quis."
      />
    </main>
  );
};

export default Content;
