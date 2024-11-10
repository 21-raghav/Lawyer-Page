/* eslint-disable react/prop-types */
import "./SocialMediaLinks.css";

const SocialLinks = ({className}) => {
  return (
    <ul className={`social_list ${className}`}>
      {/* <li>
        <a href="https://www.facebook.com/">
          <img src="./icon_facebook.svg" alt="facebook" />
        </a>
      </li> */}
      <li>
        <a href="https://www.instagram.com/yash_ki_baaten/">
          <img src="./icon_instagram.svg" alt="instagram" />
        </a>
      </li>
      {/* <li>
        <a href="https://in.linkedin.com/">
          <img src="./icon_linkedin.svg" alt="linkedin" />
        </a>
      </li> */}
    </ul>
  );
};

export default SocialLinks;
