import { Box } from '@material-ui/core';
import React from 'react';
import AppWrap from '../styles/App.module.scss';
import PreLoader from './PreLoader';

const Main = ({
    toggleLayoutState,
    toggleFonState,
    toggleLayoutSizeState,
    toggleBackgroundState,
    backgroundİmg,
    layoutİmg,
    openModal
}: any) => {
    const [loading, setLoading] = React.useState(true);
    setTimeout(function () {
        setLoading(false);
    }, 1500);
    return (
        <Box
            width={openModal ? '100%' : '92%'}
            height={openModal ? '100%' : '72%'}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {toggleLayoutState === 0 ? (
                loading ? (
                    <Box>
                        <img
                            src="https://cdn.dribbble.com/users/3337757/screenshots/6825268/076_-loading_animated_dribbble_copy.gif"
                            width="125"
                        />
                    </Box>
                ) : (
                    'Başlamaq üçün sol menyudan düzülüş seçin'
                )
            ) : toggleFonState === 0 ? (
                <Box
                    width={toggleLayoutSizeState === 1 ? '45%' : '60%'}
                    height={toggleLayoutSizeState === 1 ? '60%' : '70%'}
                >
                    {toggleLayoutState === 1 ? (
                        <Box display="flex" className={AppWrap.Table}>
                            <div
                                className={`${AppWrap.TableDivСonvert} ${AppWrap.TableDivСonvert1}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivСonvert} ${AppWrap.TableDivСonvert2}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivСonvert} ${AppWrap.TableDivСonvert3}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivСonvert} ${AppWrap.TableDivСonvert4}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivСonvert} ${AppWrap.TableDivСonvert5}`}
                            ></div>
                        </Box>
                    ) : toggleLayoutState === 2 ? (
                        <Box display="flex" className={AppWrap.Table}>
                            <div
                                className={`${AppWrap.TableDivCanvas2Сonvert} ${AppWrap.TableDivCanvas2Сonvert1}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivCanvas2Сonvert} ${AppWrap.TableDivCanvas2Сonvert2}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivCanvas2Сonvert} ${AppWrap.TableDivCanvas2Сonvert3}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivCanvas2Сonvert} ${AppWrap.TableDivCanvas2Сonvert4}`}
                            ></div>
                        </Box>
                    ) : toggleLayoutState === 3 ? (
                        <Box display="flex" className={AppWrap.Table}>
                            <div
                                className={`${AppWrap.TableDivCanvas3Сonvert} ${AppWrap.TableDivCanvas3Сonvert1}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivCanvas3Сonvert} ${AppWrap.TableDivCanvas3Сonvert2}`}
                            ></div>
                            <div
                                className={`${AppWrap.TableDivCanvas3Сonvert} ${AppWrap.TableDivCanvas3Сonvert3}`}
                            ></div>
                        </Box>
                    ) : toggleLayoutState === 4 ? (
                        <Box display="flex" className={AppWrap.Table}>
                            <div
                                className={`${AppWrap.TableDivCanvas4Сonvert} ${AppWrap.TableDivCanvas4Сonvert1}`}
                            ></div>
                        </Box>
                    ) : (
                        ''
                    )}
                </Box>
            ) : (
                <Box
                    display="flex"
                    style={{
                        backgroundImage:
                            toggleBackgroundState !== 0
                                ? `url(${
                                      backgroundİmg[toggleBackgroundState - 1]
                                          .url
                                  })`
                                : ``,
                        backgroundSize: 'cover',
                        width: toggleLayoutSizeState === 1 ? '80%' : '90%',
                        height: toggleLayoutSizeState === 1 ? '90%' : '100%',
                        justifyContent: 'center',
                        backgroundPosition: 'bottom'
                    }}
                >
                    {/* backgroundImg1 */}
                    {toggleBackgroundState != 0 &&
                    toggleBackgroundState === 1 ? (
                        toggleLayoutState === 1 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg1}`}
                                    >
                                        <i className={AppWrap.DivInsideBg}></i>
                                        <i className={AppWrap.DivInsideBg}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg2}`}
                                    >
                                        <i className={AppWrap.DivInsideBg2}></i>
                                        <i className={AppWrap.DivInsideBg2}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg03}`}
                                    ></div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg4}`}
                                    >
                                        <i className={AppWrap.DivInsideBg2}></i>
                                        <i className={AppWrap.DivInsideBg2}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg5}`}
                                    >
                                        <i className={AppWrap.DivInsideBg}></i>
                                        <i className={AppWrap.DivInsideBg}></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 2 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg1}`}
                                    >
                                        <i className={AppWrap.Div2InsideBg}></i>
                                        <i className={AppWrap.Div2InsideBg}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg2}`}
                                    >
                                        <i></i>
                                        <i
                                            className={AppWrap.Div22InsideBg2}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg03}`}
                                    >
                                        <i
                                            className={AppWrap.Div23InsideBg2}
                                        ></i>
                                        <i></i>
                                    </div>

                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg5}`}
                                    >
                                        <i className={AppWrap.Div2InsideBg}></i>
                                        <i className={AppWrap.Div2InsideBg}></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 3 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg2}`}
                                    >
                                        <i className={AppWrap.DivInsideBg2}></i>
                                        <i className={AppWrap.DivInsideBg2}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg03}`}
                                    ></div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg4}`}
                                    >
                                        <i className={AppWrap.DivInsideBg2}></i>
                                        <i className={AppWrap.DivInsideBg2}></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 4 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg2}`}
                                    >
                                        <i
                                            className={AppWrap.Div4InsideBg2}
                                        ></i>
                                        <i
                                            className={AppWrap.Div4InsideBg2}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg} ${AppWrap.TableDivBg03}`}
                                    ></div>
                                </Box>
                            </Box>
                        ) : (
                            <Box>sdfsfdsfd</Box>
                        )
                    ) : /* backgroundImg2 */
                    toggleBackgroundState != 0 &&
                      toggleBackgroundState === 2 ? (
                        toggleLayoutState === 1 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap01}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg012}`}
                                    >
                                        <i className={AppWrap.DivInsideBg1}></i>
                                        <i className={AppWrap.DivInsideBg1}></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg012}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg12}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg12}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg13}`}
                                    ></div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg14}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg12}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg12}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg15}`}
                                    >
                                        <i className={AppWrap.DivInsideBg1}></i>
                                        <i className={AppWrap.DivInsideBg1}></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 2 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap01}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg15}`}
                                    >
                                        <i
                                            className={AppWrap.Div3InsideBg1}
                                        ></i>
                                        <i
                                            className={AppWrap.Div3InsideBg1}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg13}`}
                                    >
                                        <i></i>
                                        <i
                                            className={AppWrap.Div3InsideBg12}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg14}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg12}
                                        ></i>
                                        <i></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg15}`}
                                    >
                                        <i
                                            className={AppWrap.Div3InsideBg1}
                                        ></i>
                                        <i
                                            className={AppWrap.Div3InsideBg1}
                                        ></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 3 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap01}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg012}`}
                                    >
                                        <i className={AppWrap.DivInsideBg1}></i>
                                        <i className={AppWrap.DivInsideBg1}></i>
                                    </div>

                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg13}`}
                                    ></div>

                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg15}`}
                                    >
                                        <i className={AppWrap.DivInsideBg1}></i>
                                        <i className={AppWrap.DivInsideBg1}></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 4 ? (
                            <Box width={'40%'} height={'50%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap01}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '50px'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg012}`}
                                    ></div>

                                    <div
                                        className={`${AppWrap.TableDivBg01} ${AppWrap.TableDivBg13}`}
                                    ></div>
                                </Box>
                            </Box>
                        ) : (
                            <Box>asdasdasda</Box>
                        )
                    ) : /* backgroundImg3 */
                    toggleBackgroundState != 0 &&
                      toggleBackgroundState === 3 ? (
                        toggleLayoutState === 1 ? (
                            <Box width={'35%'} height={'40%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap3}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg32}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg32}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg32}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg32}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg33}`}
                                    ></div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg34}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg32}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg32}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg35}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 2 ? (
                            <Box width={'35%'} height={'40%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap3}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg35}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg33}`}
                                    >
                                        <i></i>
                                        <i
                                            className={AppWrap.Div3InsideBg32}
                                        ></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg34}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg32}
                                        ></i>
                                        <i></i>
                                    </div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg35}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 3 ? (
                            <Box width={'35%'} height={'40%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap3}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg32}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>

                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg33}`}
                                    ></div>

                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg35}`}
                                    >
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                        <i
                                            className={AppWrap.DivInsideBg31}
                                        ></i>
                                    </div>
                                </Box>
                            </Box>
                        ) : toggleLayoutState === 4 ? (
                            <Box width={'30%'} height={'35%'}>
                                <Box
                                    className={AppWrap.TableDivBgWrap3}
                                    display="flex"
                                    style={{
                                        backgroundImage: `url(${
                                            layoutİmg[toggleFonState - 1].src
                                        })`,
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                >
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg33}`}
                                    ></div>
                                    <div
                                        className={`${AppWrap.TableDivBg3} ${AppWrap.TableDivBg33}`}
                                    ></div>
                                </Box>
                            </Box>
                        ) : (
                            <Box>asdasdads</Box>
                        )
                    ) : /* backgroundImg */

                    toggleLayoutState === 1 ? (
                        <Box width={'60%'} height={'70%'}>
                            <Box
                                display="flex"
                                style={{
                                    backgroundImage: `url(${
                                        layoutİmg[toggleFonState - 1].src
                                    })`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '50px'
                                }}
                            >
                                <div
                                    className={`${AppWrap.TableDiv} ${AppWrap.TableDiv1}`}
                                >
                                    <i className={AppWrap.DivInside}></i>
                                    <i className={AppWrap.DivInside}></i>
                                </div>
                                <div
                                    className={`${AppWrap.TableDiv} ${AppWrap.TableDiv2}`}
                                >
                                    <i className={AppWrap.DivInside2}></i>
                                    <i className={AppWrap.DivInside2}></i>
                                </div>
                                <div
                                    className={`${AppWrap.TableDiv} ${AppWrap.TableDiv3}`}
                                ></div>
                                <div
                                    className={`${AppWrap.TableDiv} ${AppWrap.TableDiv4}`}
                                >
                                    <i className={AppWrap.DivInside2}></i>
                                    <i className={AppWrap.DivInside2}></i>
                                </div>
                                <div
                                    className={`${AppWrap.TableDiv} ${AppWrap.TableDiv5}`}
                                >
                                    <i className={AppWrap.DivInside}></i>
                                    <i className={AppWrap.DivInside}></i>
                                </div>
                            </Box>
                        </Box>
                    ) : toggleLayoutState === 2 ? (
                        <Box width={'60%'} height={'70%'}>
                            <Box
                                display="flex"
                                style={{
                                    backgroundImage: `url(${
                                        layoutİmg[toggleFonState - 1].src
                                    })`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '50px'
                                }}
                            >
                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div1}`}
                                >
                                    <i className={AppWrap.Div2Inside}></i>
                                    <i className={AppWrap.Div2Inside}></i>
                                </div>
                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div2}`}
                                >
                                    <i className={AppWrap.Div22Inside2}></i>
                                    <i className={AppWrap.Div221Inside2}></i>
                                </div>
                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div3}`}
                                >
                                    <i className={AppWrap.Div23Inside2}></i>
                                    <i className={AppWrap.Div23Inside2}></i>
                                </div>

                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div5}`}
                                >
                                    <i className={AppWrap.Div2Inside}></i>
                                    <i className={AppWrap.Div2Inside}></i>
                                </div>
                            </Box>
                        </Box>
                    ) : toggleLayoutState === 3 ? (
                        <Box width={'60%'} height={'70%'}>
                            <Box
                                display="flex"
                                style={{
                                    backgroundImage: `url(${
                                        layoutİmg[toggleFonState - 1].src
                                    })`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '50px'
                                }}
                            >
                                <div
                                    className={`${AppWrap.Table3Div} ${AppWrap.Table2Div1}`}
                                >
                                    <i className={AppWrap.Div2Inside}></i>
                                    <i className={AppWrap.Div2Inside}></i>
                                </div>

                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div3}`}
                                ></div>

                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div5}`}
                                >
                                    <i className={AppWrap.Div2Inside}></i>
                                    <i className={AppWrap.Div2Inside}></i>
                                </div>
                            </Box>
                        </Box>
                    ) : toggleLayoutState === 4 ? (
                        <Box width={'60%'} height={'70%'}>
                            <Box
                                display="flex"
                                style={{
                                    backgroundImage: `url(${
                                        layoutİmg[toggleFonState - 1].src
                                    })`,
                                    backgroundSize: 'cover',
                                    width: '100%',
                                    height: '100%',
                                    marginTop: '50px'
                                }}
                            >
                                <div
                                    className={`${AppWrap.Table2Div} ${AppWrap.Table2Div3}`}
                                ></div>
                            </Box>
                        </Box>
                    ) : (
                        <Box>asdasd</Box>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default Main;
