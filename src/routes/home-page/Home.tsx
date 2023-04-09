import { useRef, useState } from 'react';
import PhotoCard from '../../components/product-card/PhotoCard';
import { SearchBar, SearchBarProps } from '../../components/search-bar/SearchBar';
import { Photo } from '../../interfaces/response';
import styles from './home-page.module.scss';

interface HomePageProps extends SearchBarProps {
  photos: Photo[];
}

const HomePage = (props: HomePageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const photoModalRef = useRef<HTMLDialogElement>(null);

  const cards = props.photos.map((item) => (
    <PhotoCard
      key={item.id.toString()}
      img={item.urls.thumb}
      altDesc={item.alt_description}
      onClick={() => photoModalRef.current?.showModal()}
    />
  ));

  return (
    <>
      <SearchBar updSearch={props.updSearch} search={props.search} />
      <dialog ref={photoModalRef} onClick={() => photoModalRef.current?.close()}>
        This is modal
      </dialog>
      <section className={styles.section}>
        <div className={styles.cards}>{cards}</div>
      </section>
    </>
  );
};

export default HomePage;
