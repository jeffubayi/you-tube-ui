import { Box, Grid, Skeleton, CardHeader, Avatar, Typography,useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { data } from "../utility/data";

interface YoutubeVideoCardProps {
    loading?: boolean;
    open?: boolean;
  }

export default function YoutubeVideoCard(props: YoutubeVideoCardProps) {
    const { loading = false, open } = props;
    const router = useRouter();
    const isMobile = useMediaQuery("(min-width:500px)");
    const handleView = (item:any) => {
      router.push(
        {
          pathname: "/watch",
          query: {
            ...item
          },
        },
        `/watch?v=${item?.id}`
      );
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}>
          {(loading ? Array.from(new Array(18)) : data).map((item, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={open ? 4 : 3}
              lg={open ? 4 : 3}
              xl={open ? 3 : 2.4}
              key={index}
              mt={1}
              sx={{ cursor: "pointer" }}
              onClick={() => handleView(item)}
            >
              {loading ? (
                <Skeleton variant="rectangular" width={open ? 383 : 318} height={open ? 220 : 180} sx={{ borderRadius: "10px" }} />
              ) : (
                <img
                  style={{ width: open ? 383 : "auto", height: open ? 220 : 180, borderRadius: "10px" }}
                  alt={item?.title}
                  src={item?.src}
                />
              )}
              <CardHeader
                sx={{ alignItems: "flex-start" }}
                avatar={
                  <>
                    {loading ? (
                      <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                      <Avatar
                        alt="avatar"
                        src={item?.avatar}
                      />
                    )}
                  </>
                }
                title={
                  <>
                    {loading ? (
                      <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                      />
                    ) : (
                      <Typography display="block" sx={{ fontWeight: "bold", fontSize: "0.9rem", letterSpacing: "1px" }} >
                        {item?.title}
                      </Typography>
                    )}
                  </>
                }
                subheader={
                  <>
                    {loading ? (
                      <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                      <>
                        <Typography display="block" variant="caption" color="text.secondary">
                          {item?.channel}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {`${item?.views} • ${item?.createdAt}`}
                        </Typography>
                      </>
                    )}
                  </>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }