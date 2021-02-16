import * as React from 'react';
import { Link } from 'react-router-dom';

interface SaveSuccessProps {
  successUrl: string;
}

/**
 * @deprecated This component is tempoary and should be replaced
 */
export const SaveSuccess = ({ successUrl }: SaveSuccessProps): JSX.Element => (
  <div>
    Successfully Saved! <Link to={successUrl}>View here</Link>
  </div>
);
