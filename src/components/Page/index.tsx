import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            { name: 'Model 3', description: 'Order online for Touchless Delivery' },
            { name: 'Model S', description: 'Order online for Touchless Delivery' },
            { name: 'Model X', description: 'Order online for Touchless Delivery' },
            { name: 'Model Y', description: 'Order online for Touchless Delivery' },
          ].map(model => (
            <ModelSection
              key={model.name}
              className="colored"
              modelName={model.name}
              overlayNode={
                <DefaultOverlayContent
                  label={model.name}
                  description={model.description}
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
