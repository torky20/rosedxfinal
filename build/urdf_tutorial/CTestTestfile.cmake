# CMake generated Testfile for 
# Source directory: /home/torky/hrwros_ws/src/urdf_tutorial-ros1
# Build directory: /home/torky/hrwros_ws/build/urdf_tutorial
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_urdf_tutorial_roslaunch-check_launch "/home/torky/hrwros_ws/build/urdf_tutorial/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/torky/hrwros_ws/build/urdf_tutorial/test_results/urdf_tutorial/roslaunch-check_launch.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/torky/hrwros_ws/build/urdf_tutorial/test_results/urdf_tutorial" "/opt/ros/noetic/share/roslaunch/cmake/../scripts/roslaunch-check -o \"/home/torky/hrwros_ws/build/urdf_tutorial/test_results/urdf_tutorial/roslaunch-check_launch.xml\" \"/home/torky/hrwros_ws/src/urdf_tutorial-ros1/launch\" ")
set_tests_properties(_ctest_urdf_tutorial_roslaunch-check_launch PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/roslaunch/cmake/roslaunch-extras.cmake;66;catkin_run_tests_target;/home/torky/hrwros_ws/src/urdf_tutorial-ros1/CMakeLists.txt;9;roslaunch_add_file_check;/home/torky/hrwros_ws/src/urdf_tutorial-ros1/CMakeLists.txt;0;")
subdirs("gtest")
