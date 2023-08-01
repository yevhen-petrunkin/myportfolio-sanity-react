import technologyImgArray from "../constants/technologyImgArray";

function getProjectIcons(tags) {
  return tags.reduce((aggr, tag) => {
    const arr = technologyImgArray.filter(({ keywords }) =>
      keywords.some((keyword) => keyword.toLowerCase() === tag.toLowerCase())
    );
    return (aggr = [...aggr, ...arr]);
  }, []);
}

export default getProjectIcons;
