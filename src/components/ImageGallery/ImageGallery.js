import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { LoaderFunc } from "components/Loader/Loader";
import { GalleryUl} from "./ImageGallery.styled";

export function ImageGallery({ status, pictures, totalHits, page, loadMore }) {
    
  if (status === "pending") {
        return <LoaderFunc />;
    }


if (status === "ready") {
    return (
              <>
        <GalleryUl>
          {pictures.map((picture) => (
            <ImageGalleryItem
              key={picture.id}
              smallImage={picture.webformatURL}
              largeImage={picture.largeImageURL}
            />
          ))}
        </GalleryUl>

        {pictures.length !== 0 &&
          Math.ceil(totalHits / 12) !== page && (
            <Button onClick={loadMore} />
          )}

        {pictures.length === 0 && (
          <p>
            Sorry, we couldn't find any pictures for this search.
          </p>
        )}
      </>
    )
}

if (status === "loading more") {
    return (
      <>
        <GalleryUl>
          {pictures.map(picture => (
            <ImageGalleryItem
              key={picture.id}
              smallImage={picture.webformatURL}
              largeImage={picture.largeImageURL}
            />
          ))}
        </GalleryUl>

        <LoaderFunc />
      </>
    );
}
}