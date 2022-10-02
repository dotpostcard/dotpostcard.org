# `.postcard` binary fileformat

All types are bigendian and UTF-8 encoded.

| Offset       | Length | Type        | Description                                                                               |
| ------------ | ------ | ----------- | ----------------------------------------------------------------------------------------- |
| `0`          | `8`    | Magic bytes | All postcard files start with these 8 bytes.                                              |
|              |        |             | _The (semantic) version of this spec used to create the file._                            |
| `8`          | `1`    | Integer     | The `major` component.                                                                    |
| `9`          | `1`    | Integer     | The `minor` component.                                                                    |
| `10`         | `1`    | Integer     | The `patch` component.                                                                    |
|              |        |             | _The **metadata** section._                                                               |
| `11`         | `4`    | Integer     | `m`: The length (in bytes) of the following Metadata section.                             |
| `15`         | `m`    | JSON string | The metadata of this postcard, in JSON format. [See below](#metadata-json) for more info. |
|              |        |             | _The **front image** section._                                                            |
| `15 + m`     | `4`    | Integer     | `f`: The length (in bytes) of the following front image section.                          |
| `19 + m`     | `f`    | WebP binary | The binary image data for the front of the poscard, in WebP format.                       |
|              |        |             | _The **front image** section._                                                            |
| `19 + m + f` | `4`    | Integer     | `b`: The length (in bytes) of the following front image section.                          |
| `23 + m + f` | `b`    | WebP binary | The binary image data for the front of the poscard, in WebP format.                       |

## Metadata JSON

The metadata for a postcard file is encoded as JSON in the metadata section of the file structure.

While better documentation is being created, the structure is defined in the [Go reference library](https://github.com/dotpostcard/postcards-go/blob/main/internal/types/types.go#L29-L38).
