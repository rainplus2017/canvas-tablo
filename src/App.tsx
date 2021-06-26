import { Box, Button } from '@material-ui/core';
import React from 'react';
import AppWrap from './styles/App.module.scss';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import PublishIcon from '@material-ui/icons/Publish';
import data from './api/db.json';
import Main from './components/Main';
import PreLoader from './components/PreLoader';
import LoadingLeftBar from './components/LoadingLeftBar';
var ScrollArea = require('react-scrollbar');

const App = () => {
    const [toggleState, setToggleState] = React.useState(1);
    const [toggleLayoutState, setToggleLayoutState] = React.useState(0);
    const [toggleLayoutSizeState, setToggleLayoutSizeState] = React.useState(1);
    const [toggleBackgroundState, setToggleBackgroundState] = React.useState(0);
    const [toggleFonState, setToggleFonState] = React.useState(0);
    const [highlight, setHighlight] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [loadingBar, setLoadingBar] = React.useState(true);

    const [openModal, setOpenModal] = React.useState(false);

    const [uploadİmg, setUploadİmg] = React.useState({
        photos: [
            {
                src: 'https://pbs.twimg.com/media/EuewvDUWgAAvbFp.jpg'
            },
            {
                src: 'https://s9.travelask.ru/uploads/post/000/006/527/main_image/full-3018e900a4b61c971aa61218ec0ec5fc.jpg'
            },
            {
                src: 'https://cdn.akamai.steamstatic.com/steam/apps/33320/ss_582b9744d96c292c4131c46156a45bdf384cb649.1920x1080.jpg?t=1452182006'
            }
        ] as any
    });

    var photos = uploadİmg.photos;

    const { layoutСarcass, backgroundİmg, layoutİmg } = data;

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    setTimeout(function () {
        setLoading(false);
    }, 1500);

    setTimeout(function () {
        setLoadingBar(false);
    }, 3000);

    const toggleLayout = (index: number) => {
        setToggleLayoutState(index);
    };
    const toggleLayoutSize = (index: number) => {
        setToggleLayoutSizeState(index);
    };

    const toggleBackgroundLayout = (index: number) => {
        setToggleBackgroundState(index);
    };

    const toggleFon = (index: number) => {
        setToggleFonState(index);
    };

    const handleFileChange = (e: any) => {
        const files: any = e.target.files;
        handfiles(files);
    };

    const order = (a, b) => {
        return a > b ? -1 : a < b ? 1 : 0;
    };

    const handfiles = (files: any) => {
        const photosArr = [] as any;
        for (let file of files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                let fileobj = {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    src: reader.result
                };

                photosArr.push(fileobj);

                setUploadİmg({
                    ...uploadİmg,
                    photos: [...uploadİmg.photos, ...photosArr]
                });
            });
        }
    };

    const handlehighlight = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    };

    const handleunhiglight = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
    };

    const handledrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        let dt = e.dataTransfer;
        let files = dt.files;
        setHighlight(false);
        handfiles(files);
    };

    const onUnload = (e) => {
        e.preventDefault();
        alert('HELLO WORLD');
    };

    React.useEffect(() => {
        window.addEventListener('beforeunload', function (e) {
            // Cancel the event as stated by the standard.
            e.preventDefault();
            // Chrome requires returnValue to be set.
            e.returnValue = '';
        });
    });

    return (
        <Box>
            {loading ? (
                <PreLoader />
            ) : (
                <>
                    <Box className={AppWrap.HeaderWrap}>
                        <Box>
                            <img
                                src="./canvasLogo.png"
                                title="Paella dish"
                                className={AppWrap.HeaderLogo}
                            />
                        </Box>
                        <Box display="flex" alignItems="center">
                            {!openModal ? (
                                <Box
                                    className={AppWrap.Color}
                                    onClick={() => setOpenModal(true)}
                                >
                                    Baxış
                                </Box>
                            ) : (
                                <Box
                                    className={AppWrap.Color}
                                    onClick={() => setOpenModal(false)}
                                >
                                    Düzəliş et
                                </Box>
                            )}
                            <Button
                                variant="contained"
                                className={AppWrap.Buton}
                            >
                                100 AZN Sifariş et
                            </Button>
                        </Box>

                        {openModal && (
                            <Box
                                className={
                                    openModal === true
                                        ? AppWrap.ModalWindow
                                        : AppWrap.ModalWindowHide
                                }
                            >
                                <Main
                                    toggleLayoutState={toggleLayoutState}
                                    toggleFonState={toggleFonState}
                                    toggleLayoutSizeState={
                                        toggleLayoutSizeState
                                    }
                                    toggleBackgroundState={
                                        toggleBackgroundState
                                    }
                                    backgroundİmg={backgroundİmg}
                                    layoutİmg={uploadİmg.photos}
                                    openModal={openModal}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box className={AppWrap.MainWrap} display="flex">
                        <Box mr={1}>
                            <Box
                                className={
                                    toggleState == 1
                                        ? `${AppWrap.Tabs} ${AppWrap.Active}`
                                        : AppWrap.Tabs
                                }
                                onClick={() => toggleTab(1)}
                            >
                                <AspectRatioIcon />
                                Ölçü
                            </Box>
                            <Box
                                className={
                                    toggleState == 2
                                        ? `${AppWrap.Tabs} ${AppWrap.Active}`
                                        : AppWrap.Tabs
                                }
                                onClick={() => toggleTab(2)}
                            >
                                <FlipToBackIcon />
                                Arxa fon
                            </Box>
                        </Box>
                        {loadingBar ? (
                            <Box mt={1} className={AppWrap.WrapContent}>
                                <Box className={AppWrap.LoadingLeftBarItem}>
                                    <LoadingLeftBar />
                                </Box>
                                <Box className={AppWrap.LoadingLeftBarItem}>
                                    <LoadingLeftBar />
                                </Box>

                                <Box className={AppWrap.LoadingLeftBarItem}>
                                    <LoadingLeftBar />
                                </Box>
                            </Box>
                        ) : (
                            <Box mt={1} className={AppWrap.WrapContent}>
                                <Box
                                    className={
                                        toggleState === 1
                                            ? `${AppWrap.Content} ${AppWrap.ActiveContent}`
                                            : AppWrap.Content
                                    }
                                >
                                    {layoutСarcass.map((layout, index) => (
                                        <Box
                                            className={AppWrap.ItemContentWrap}
                                        >
                                            <Box
                                                className={
                                                    toggleLayoutState ===
                                                    layout.id
                                                        ? `${AppWrap.ActiveContentİmgBorder} ${AppWrap.ActiveContentİmgBorderActive}`
                                                        : AppWrap.ActiveContentİmgBorder
                                                }
                                                onClick={() =>
                                                    toggleLayout(layout.id)
                                                }
                                            >
                                                <img
                                                    src={layout.src}
                                                    className={
                                                        AppWrap.ImageSize
                                                    }
                                                />
                                            </Box>
                                            {toggleLayoutState ===
                                                layout.id && (
                                                <Box
                                                    display="flex"
                                                    className={
                                                        AppWrap.LayoutWrapItem
                                                    }
                                                >
                                                    <Box
                                                        flexGrow={1}
                                                        mr={1}
                                                        className={
                                                            toggleLayoutSizeState ===
                                                            1
                                                                ? `${AppWrap.LayoutItem} ${AppWrap.ActiveContentİmgBorderActive}`
                                                                : AppWrap.LayoutItem
                                                        }
                                                        onClick={() =>
                                                            toggleLayoutSize(1)
                                                        }
                                                    >
                                                        75x80
                                                    </Box>
                                                    <Box
                                                        flexGrow={1}
                                                        ml={1}
                                                        className={
                                                            toggleLayoutSizeState ===
                                                            2
                                                                ? `${AppWrap.LayoutItem} ${AppWrap.ActiveContentİmgBorderActive}`
                                                                : AppWrap.LayoutItem
                                                        }
                                                        onClick={() =>
                                                            toggleLayoutSize(2)
                                                        }
                                                    >
                                                        100x105
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    ))}
                                </Box>

                                <Box
                                    className={
                                        toggleState === 2
                                            ? `${AppWrap.Content} ${AppWrap.ActiveContent}`
                                            : AppWrap.Content
                                    }
                                >
                                    {backgroundİmg.map((bcİmg, index) => (
                                        <Box
                                            className={
                                                toggleBackgroundState ===
                                                bcİmg.id
                                                    ? `${AppWrap.ActiveContentİmgBorder} ${AppWrap.ActiveContentİmgBorderActive}`
                                                    : AppWrap.ActiveContentİmgBorder
                                            }
                                            onClick={() =>
                                                toggleBackgroundLayout(bcİmg.id)
                                            }
                                        >
                                            <img
                                                src={bcİmg.url}
                                                className={AppWrap.ImageSize}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )}

                        <Box flexGrow={1} mr={1}>
                            <Main
                                toggleLayoutState={toggleLayoutState}
                                toggleFonState={toggleFonState}
                                toggleLayoutSizeState={toggleLayoutSizeState}
                                toggleBackgroundState={toggleBackgroundState}
                                backgroundİmg={backgroundİmg}
                                layoutİmg={uploadİmg.photos}
                            />

                            <Box>
                                <Box alignItems="center" display="flex">
                                    {loadingBar ? (
                                        <Box
                                            alignItems="center"
                                            display="flex"
                                            mt={1}
                                        >
                                            <Box
                                                className={AppWrap.ImgBackround}
                                                mr={15}
                                            >
                                                <LoadingLeftBar />
                                            </Box>
                                            <Box
                                                className={AppWrap.ImgBackround}
                                                mr={15}
                                            >
                                                <LoadingLeftBar />
                                            </Box>

                                            <Box
                                                className={AppWrap.ImgBackround}
                                                mr={15}
                                            >
                                                <LoadingLeftBar />
                                            </Box>
                                        </Box>
                                    ) : (
                                        <>
                                            <Box
                                                textAlign="center"
                                                className={AppWrap.Color}
                                                onDragEnter={handlehighlight}
                                                onDragOver={handlehighlight}
                                                onDragLeave={handleunhiglight}
                                                onDrop={handledrop}
                                            >
                                                <Box
                                                    className={
                                                        highlight
                                                            ? `${AppWrap.CustomFileDropArea} ${AppWrap.CustomFileDropAreaActive}`
                                                            : AppWrap.CustomFileDropArea
                                                    }
                                                >
                                                    <input
                                                        type="file"
                                                        name="photos"
                                                        placeholder="Enter photos"
                                                        multiple={true}
                                                        id="filephotos"
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                    />
                                                    <label htmlFor="filephotos">
                                                        <PublishIcon />
                                                        <Box>Şəkil yüklə</Box>
                                                    </label>
                                                </Box>
                                            </Box>

                                            <Box
                                                ml={1}
                                                display="flex"
                                                className={
                                                    AppWrap.WrapContentGaleryImg
                                                }
                                            >
                                                {photos
                                                    .map((item, index) => (
                                                        <img
                                                            src={item.src}
                                                            title="Şəkilə tıklayın"
                                                            className={
                                                                toggleFonState ===
                                                                index + 1
                                                                    ? `${AppWrap.ImgBackround} ${AppWrap.ImgBackroundActive}`
                                                                    : AppWrap.ImgBackround
                                                            }
                                                            onClick={() =>
                                                                toggleFon(
                                                                    index + 1
                                                                )
                                                            }
                                                        />
                                                    ))
                                                    .sort((x, y) =>
                                                        x > y ? 1 : -1
                                                    )}
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default App;
