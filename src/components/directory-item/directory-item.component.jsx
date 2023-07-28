import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.js";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title.toLowerCase()}`);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
