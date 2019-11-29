# PUBLISH TO ECR

## Inputs

### `image-tag`

**Required** The tag of the image.

## Outputs

### `message`

A message we send when the image is published.

## Example usage

uses: actions/publish-ecr-image@v1
with:
  image-tag: 'merchant-ui'