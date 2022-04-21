import React, { useState } from 'react';
import { withDocument } from 'part:@sanity/form-builder';
import Button from 'part:@sanity/components/buttons/default';

const PdfInput = React.forwardRef(({ document }, ref) => {
  const documentId = document?._id?.replace('drafts.', '');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    await fetch(
      `https://colorcove-web.netlify.com/.netlify/functions/generate-pdf?id=${documentId}`,
      { mode: 'no-cors' }
    );

    setLoading(false);
  };

  return (
    <Button
      ref={ref}
      onClick={handleDownload}
      disabled={loading || !documentId}
    >
      Generate PDF
    </Button>
  );
});

export default withDocument(PdfInput);
