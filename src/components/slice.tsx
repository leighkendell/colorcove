import React from 'react';
import TextBlock from './text-block';
import Video from './video';
import Section from './section';
import Wrapper from './wrapper';
import ImageComparison from './image-comparison';

interface Props {
  data: any; // TODO: pull in types
}

const Slice: React.FC<Props> = ({ data }) => {
  const slices = data.map(({ slice_type, primary }: any) => {
    let content;

    // Feature text block
    if (slice_type === 'feature_text') {
      content = (
        <TextBlock
          title={primary.heading.text}
          description={primary.text.text}
          horizontal={primary.layout === 'Horizontal'}
        />
      );
    }

    // Vimeo video
    if (slice_type === 'video') {
      content = (
        <Video
          url={primary.video.embed_url}
          width={primary.video.thumbnail_width}
          height={primary.video.thumbnail_height}
          image={primary.video_image.localFile.childImageSharp.fluid}
        />
      );
    }

    // Image Comparison
    if (slice_type === 'image_comparison') {
      const { before_image, after_image, name } = primary;

      content = (
        <ImageComparison
          beforeImage={before_image.localFile.childImageSharp.fluid}
          afterImage={after_image.localFile.childImageSharp.fluid}
          beforeLabel="As shot"
          afterLabel={name.text}
        />
      );
    }

    return (
      <Section>
        <Wrapper>{content}</Wrapper>
      </Section>
    );
  });

  return <>{slices}</>;
};

export default Slice;
